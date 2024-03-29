import { BlockEventHandler, CustomBlockElementEvents, ICustomBlockElementConfig, ICustomElementConfig, ICustomInlineElementConfig, ICustomTextConfig, isContentTypeConforms, MdastContentType, RemarkBlockElement, RemarkElement, RemarkElementProps, RemarkInlineElement, RemarkText, TypedRenderLeafProps } from './elements'
import { Ancestor, Editor, Element, Node, NodeEntry, Path, Point, Range, Text, Transforms } from 'slate'
import type { EditableProps } from 'slate-react/dist/components/editable'
import { ClipboardEvent, createElement, DragEvent, KeyboardEvent } from 'react'
import isHotkey from 'is-hotkey'
import TextNode, { TextNodeDecorator } from '../elements/text/TextNode'
import LinkNode from '../elements/link/LinkNode'
import DecorationStack from './decoration-stack'
import { ReactEditor } from 'slate-react'
import { isElementType } from '../slate-utils'
import { ToggleStrategy } from '../../components/ti-editor/TiEditor'
import { Processor } from 'unified'
import { Image } from 'remark-slate-transformer/lib/transformers/mdast-to-slate'


type ProcessorHandler = (processor: Processor) => void

let id = 0

export class EditorFactory<T extends RemarkText = RemarkText, BE extends RemarkBlockElement = RemarkBlockElement, IE extends RemarkInlineElement = RemarkInlineElement> {
  readonly blockConfigs: ICustomBlockElementConfig<BE>[] = []
  readonly inlineConfigs: ICustomInlineElementConfig<IE>[] = []
  private textConfig!: ICustomTextConfig<T>

  private inlineSet: Set<string> = new Set()
  private voidSet: Set<string> = new Set()
  private nonEditableSet: Set<string> = new Set()

  readonly customElementMap: Map<string, ICustomElementConfig<IE | BE>> = new Map()
  readonly contentTypeMap: Map<string, MdastContentType> = new Map()
  readonly contentModelTypeMap: Map<string, MdastContentType | null> = new Map()

  private id: number

  constructor () {
    this.id = ++id
  }


  use (plugin: (factory: this) => void): this {
    // console.debug(`factory@${this.id}.use`, plugin.name)
    plugin(this)
    return this
  }

  define (config: ICustomInlineElementConfig<IE>): this
  define<T> (config: ICustomBlockElementConfig<BE>): this
  define (config: ICustomTextConfig<T>): this
  define (config: ICustomInlineElementConfig<IE> | ICustomBlockElementConfig<BE> | ICustomTextConfig<T>): this {
    if (config.isLeaf) {
      this.textConfig = config
    } else {
      if (config.isInline) {
        this.inlineSet.add(config.type)
        this.inlineConfigs.push(config)
      } else {
        this.blockConfigs.push(config)
      }
      this.customElementMap.set(config.type, config as never)
      this.contentModelTypeMap.set(config.type, config.contentModelType)
      this.contentTypeMap.set(config.type, config.contentType)
      if (config.contentModelType === null) {
        this.voidSet.add(config.type)
      }

      if (config.isEditable) {
        this.nonEditableSet.add(config.type)
      }
    }
    return this
  }

  private editorWrapHandlers: ((editor: Editor) => void)[] = []

  onWrapEditor (handler: (editor: Editor) => void) {
    this.editorWrapHandlers.push(handler)
  }

  private editorMountedHandlers: ((editor: Editor) => void)[] = []

  onEditorMounted (handler: (editor: Editor) => void) {
    this.editorMountedHandlers.push(handler)
  }

  triggerEditorMounted (editor: Editor) {
    this.editorMountedHandlers.forEach(handler => handler(editor))
  }

  wrapEditor<E extends Editor> (editor: E): E {
    const { isVoid, isInline, normalizeNode, insertBreak } = editor

    editor.factory = this as never

    function debugPrintTree (node: Node): void {
      if (Editor.isEditor(node)) {
        console.group('#root')
        node.children.forEach(debugPrintTree)
        console.groupEnd()
      } else if (Element.isElement(node)) {
        console.group(node.type)
        node.children.forEach(debugPrintTree)
        console.groupEnd()
      } else {
        console.debug('text')
      }
    }

    if (typeof window !== 'undefined') {
      (window as any).debugPrintTree = () => debugPrintTree(editor);
      (window as any).debugEditor = editor
    }

    editor.isContent = (node, type): node is Element | Text => {
      if (Element.isElement(node)) {
        return this.contentTypeMap.get(node.type) === type
      } else if (Text.isText(node)) {
        return this.textConfig.contentType === type
      } else {
        return false
      }
    }

    editor.canContainsContent = (node, type): node is Element | Editor | Text => {
      if (Editor.isEditor(node)) {
        // https://github.com/syntax-tree/mdast#root
        return type === MdastContentType.flow
      } else if (Element.isElement(node)) {
        const nodeContentModelType = this.contentModelTypeMap.get(node.type)
        if (!nodeContentModelType) {
          return false
        }
        return isContentTypeConforms(type, nodeContentModelType)
      } else if (Text.isText(node)) {
        return isContentTypeConforms(type, TextNode.canContainsContentModelTypeOf(node))
      } else {
        return false
      }
    }

    editor.getContentType = node => {
      if (Element.isElement(node)) {
        return this.contentTypeMap.get(node.type) || null
      } else if (Text.isText(node)) {
        return this.textConfig.contentType || null
      } else {
        return null
      }
    }

    editor.getContentModelType = node => {
      if (Editor.isEditor(node)) {
        return MdastContentType.flow
      } else if (Element.isElement(node)) {
        return this.contentModelTypeMap.get(node.type) || null
      } else if (Text.isText(node)) {
        return this.textConfig.contentModelType
      } else {
        return null
      }
    }

    editor.getContentTypePair = node => {
      if (Element.isElement(node)) {
        return [this.contentTypeMap.get(node.type) || null, this.contentModelTypeMap.get(node.type) || null]
      } else if (Text.isText(node)) {
        return [this.textConfig.contentType || null, this.textConfig.contentModelType || null]
      } else {
        return [null, null]
      }
    }

    // this is important
    editor.toggle = (entry, config, params): boolean => {
      const canToggle = editor.canToggle(entry, config, true)
      if (!canToggle) {
        return false
      }
      const [[node, path], toggleStrategy] = canToggle
      const realParams = typeof params === 'object' ? params : {}
      switch (toggleStrategy) {
        case ToggleStrategy.replace:
          Transforms.unsetNodes(editor, Object.keys(Node.extractProps(node)), { at: path })
          Transforms.setNodes(editor, { type: config.type, ...realParams, children: [] }, { at: path })
          return true
        case ToggleStrategy.wrap:
          Transforms.wrapNodes(editor, { type: config.type, ...realParams } as never, { at: path })
          return true
        case ToggleStrategy.custom:
          throw new Error('TODO: ToggleStrategy.custom')
        default:
          throw new Error('unknown ToggleStrategy: ' + toggleStrategy)
      }
    }

    editor.canToggle = (entry, config, ancestors) => {
      const [node] = entry
      const [contentType, contentModelType] = editor.getContentTypePair(node)
      // TODO this is wrong
      if (config.contentType !== contentType) {
        return false
      }
      if (config.contentModelType === contentModelType) {
        return [entry, ToggleStrategy.replace]
      }
      if (config.contentModelType === contentType) {
        return [entry, ToggleStrategy.wrap]
      }

      if (!ancestors) {
        return false
      }
      const entries = Node.ancestors(editor, entry[1], { reverse: true })
      for (const entry of entries) {
        const res = editor.canToggle(entry, config, false)
        if (res) {
          return res
        }
      }
      return false
    }

    editor.unwrap = (entry: NodeEntry, configs: ICustomElementConfig<RemarkElement>[]) => {
      if (!editor.canUnwrap(entry, configs)) {
        return false
      }
      const [node, rootPath] = entry
      const levels: Path[][] = [[[]]]
      let queue: NodeEntry[] = [[node, []]]
      let depth = 0
      while (depth < configs.length - 1) {
        const newQueue: NodeEntry[] = []
        for (const [node, path] of queue) {
          for (const [i, child] of (node as Ancestor).children.entries()) {
            newQueue.push([child, path.concat(i)])
          }
        }

        depth += 1
        queue = newQueue
        levels.push(newQueue.map(([, path]) => path))
      }

      // unwrap from bottom to top to prevent using path refs.
      for (const level of levels.reverse()) {
        for (const path of level.reverse()) {
          Transforms.unwrapNodes(editor, { at: rootPath.concat(path), split: true })
        }
      }
      return true
    }

    editor.canUnwrap = ([node, path]: NodeEntry, configs: ICustomElementConfig<RemarkElement>[]) => {
      if (configs.length === 0) {
        return true
      }
      const parentContentModelType = editor.getContentModelType(Node.parent(editor, path))
      const contentModelType = configs[configs.length - 1].contentModelType
      if (!parentContentModelType || !contentModelType) {
        return false
      }
      if (!isContentTypeConforms(contentModelType, parentContentModelType)) {
        return false
      }
      // bfs checks sub nodes strictly matches the case
      // do not check if contentTypes of configs are compatible, for it is unwrapping.
      let queue: NodeEntry[] = [[node, []]]
      let depth = 0
      while (depth < configs.length) {
        const newQueue: NodeEntry[] = []
        for (const [node, path] of queue) {
          if (!isElementType(node, configs[depth].type)) {
            return false
          }
          for (const [i, child] of node.children.entries()) {
            newQueue.push([child, path.concat(i)])
          }
        }
        depth += 1
        queue = newQueue
      }
      return true
    }

    editor.wrap = (entry: NodeEntry, configs: ICustomElementConfig<RemarkElement>[], params: RemarkElementProps<any>[]) => {
      if (!editor.canWrap(entry, configs, params)) {
        return false
      }
      const [, path] = entry
      let i = configs.length - 1
      while (i >= 0) {
        const config = configs[i]
        const param = params[i]
        Transforms.wrapNodes(editor, Object.assign({ type: config.type, children: [] }, param) as never, { at: path })
        i--
      }
      return true
    }

    editor.canWrap = (entry: NodeEntry, configs: ICustomElementConfig<RemarkElement>[], params: RemarkElementProps<any>[]) => {
      console.assert(configs.length === params.length, 'editor.canWrap: configs.length should be equals to params.length')
      const [node, path] = entry
      const parent = Node.parent(editor, path)
      let i = 0
      let parentContentModelType: MdastContentType | null = editor.getContentModelType(parent)
      while (i < configs.length) {
        const config = configs[i]
        if (parentContentModelType === null || !isContentTypeConforms(config.contentType, parentContentModelType)) {
          return false
        }
        parentContentModelType = config.contentModelType
        i += 1
      }
      if (parentContentModelType === null) {
        return false
      }
      const nodeContentType = editor.getContentType(node)
      if (!nodeContentType) {
        return false
      }
      return isContentTypeConforms(nodeContentType, parentContentModelType)
    }

    editor.nearest = <E extends RemarkElement> (entry: NodeEntry, config: ICustomElementConfig<E>) => {
      const [node, path] = entry
      if (isElementType<E>(node, config.type)) {
        return entry as NodeEntry<E>
      }
      for (const ancestorEntry of Node.ancestors(editor, path, { reverse: true })) {
        if (isElementType<E>(ancestorEntry[0], config.type)) {
          return ancestorEntry as NodeEntry<E>
        }
      }
      return undefined
    }

    editor.isVoid = element => this.voidSet.has(element.type) || isVoid(element)
    editor.isInline = element => this.inlineSet.has(element.type) || isInline(element)
    editor.isEditable = node => Element.isElement(node) ? this.nonEditableSet.has(node.type) : true
    editor.normalizeNode = (entry) => {
      let shouldNormalizeDefaults = true
      const preventDefaults = () => {
        shouldNormalizeDefaults = false
      }
      Editor.withoutNormalizing(editor, () => {
        const [node, path] = entry
        if (Element.isElement(node)) {
          const normalize = this.customElementMap.get(node.type)?.normalize
          if (normalize) {
            normalize(editor, node as never, path, preventDefaults)
          }
        }
        if (Text.isText(node)) {
          if (this.textConfig.normalize) {
            this.textConfig.normalize(editor, node as never, path, preventDefaults)
          }
        }
        if (Editor.isEditor(node)) {
          if (!editor.customLayout) {
            if (node.children.length === 0) {
              Transforms.insertNodes(editor, { type: 'paragraph', children: [{ text: '' }] }, { at: [0] })
            } else {

              if (!isElementType(node.children[node.children.length - 1], 'paragraph')) {
                Transforms.insertNodes(editor, { type: 'paragraph', children: [{ text: '' }] }, { at: [node.children.length] })
              }
            }
          }
        }
      })
      if (shouldNormalizeDefaults) {
        normalizeNode(entry)
      }
    }

    editor.insertBreak = () => {
      if (editor.selection) {
        const el = Node.parent(editor, editor.selection.anchor.path)
        const cmt = editor.getContentModelType(el)
        if (cmt !== MdastContentType.phrasing) {
          Transforms.insertText(editor, '\n')
          return
        }
      }

      insertBreak()
    }

    this.editorWrapHandlers.forEach(handler => handler(editor))

    return editor
  }

  createDefaultEditableProps (editor: Editor): EditableProps {

    const handleInsertText = (event: InputEvent) => {
      const { selection } = editor
      if (selection && Range.isCollapsed(selection)) {
        const point = selection.anchor
        const node = Node.get(editor, point.path)
        const parentNode = Node.parent(editor, point.path)
        if (Text.isText(node) && Element.isElement(parentNode)) {
          if (parentNode.type === 'paragraph') {
            if (event.data === ' ' && !Path.hasPrevious(point.path)) {
              const prefix = node.text.slice(0, point.offset)
              for (const { toggle } of this.blockConfigs) {
                if (typeof toggle.estimatePrefixLength === 'number') {
                  if (prefix.length > toggle.estimatePrefixLength) {
                    continue
                  }
                }
                if (toggle.prefix?.test(prefix)) {
                  const params = toggle.onTrigger(prefix, editor, Path.parent(point.path))
                  if (typeof params !== 'undefined') {
                    Transforms.delete(editor, {
                      at: { path: point.path, offset: 0 },
                      distance: point.offset,
                    })
                    toggle.toggle(editor, Path.parent(point.path), params)
                    event.preventDefault()
                    return
                  }
                }
              }
            }
          }
        }
        // if (Text.isText(node) &&! isElementType(parentNode, 'code') && !isElementType(parentNode, 'link') && event.data === ' ') {
        //   for (const inlineConfig of this.inlineConfigs) {
        //     if (inlineConfig.match) {
        //       const matched = inlineConfig.match.regexp.exec(node.text.slice(0, point.offset))
        //       if (matched) {
        //         const url = matched[0]
        //         const start = matched.index
        //         const end = matched.index + url.length
        //         const range = { anchor: { path: point.path, offset: start }, focus: { path: point.path, offset: end } }
        //         LinkNode.insert(editor, range, { url, title: '', text: url })
        //         event.preventDefault()
        //         return
        //       }
        //     }
        //   }
        // }
        if (Text.isText(node)) {
          if (Editor.isEdge(editor, point, point.path)) {
            if (node.inlineCode) {
              editor.addMark(TextNodeDecorator.inlineCode, undefined)
            }
          }
        }
        // like links, if you input at the end of a link, slate will add the text to next text node.
        if (Editor.isInline(editor, parentNode)) {
          if (Editor.isEnd(editor, point, point.path)) {
            const path = Path.next(Path.parent(point.path))
            Transforms.insertNodes(editor, { text: event.data || '' }, { at: path })
            Transforms.move(editor, { distance: 1 })
            event.preventDefault()
            return
          }
          if (Editor.isStart(editor, point, point.path)) {
            const path = Path.parent(point.path)
            Transforms.insertNodes(editor, { text: event.data || '' }, { at: path, select: true })
            event.preventDefault()
          }
        }
      }
    }

    const withStartEventBlockHandler = (getStart: ((toggle: CustomBlockElementEvents) => BlockEventHandler | undefined), get: ((toggle: CustomBlockElementEvents) => BlockEventHandler | undefined)) => (event: InputEvent) => {
      const { selection } = editor
      if (selection) {
        if (Range.isCollapsed(selection)) {
          const point = selection.anchor
          const parentPath = Path.parent(point.path)
          const parentNode = Node.get(editor, parentPath)

          if (Element.isElement(parentNode)) {
            const config = this.customElementMap.get(parentNode.type) as ICustomBlockElementConfig<BE> | undefined
            if (!config) {
              return
            }
            if (config.isInline) {
              if (Editor.isEnd(editor, point, parentPath)) {
                Transforms.move(editor, { unit: 'offset' })
                editor.insertBreak()
                event.preventDefault()
              }
              return
            }
            const handler = get(config.events)
            if (handler && handler(editor, point.path)) {
              event.preventDefault()
              return
            }
            // TODO: wrappingParagraph elements
            // is first text node?
            if (isFirstTextPoint(editor, point)) {
              if (config) {
                const handler = getStart(config.events)
                if (handler && handler(editor, point.path)) {
                  event.preventDefault()
                  return
                }
              }
              if (parentNode.type === 'paragraph') {
                const grandParentNode = Node.parent(editor, parentPath)
                if (!Path.hasPrevious(parentPath) && Element.isElement(grandParentNode)) {
                  const config = this.customElementMap.get(grandParentNode.type) as ICustomBlockElementConfig<BE> | undefined
                  if (config?.wrappingParagraph) {
                    const handler = getStart(config.events)
                    if (handler && handler(editor, point.path)) {
                      event.preventDefault()
                      return
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    const handleDeleteText = withStartEventBlockHandler(events => events.onStartDelete, events => events.onDeleteText)
    const handleInsertParagraph = withStartEventBlockHandler(events => events.onStartEnter, events => events.onInsertParagraph)

    const withCommonEventBlockHandler = (get: ((toggle: CustomBlockElementEvents) => BlockEventHandler | undefined)) => (event: KeyboardEvent) => {
      const { selection } = editor
      if (selection) {
        if (Range.isCollapsed(selection)) {
          const point = selection.anchor
          // is first text node?
          const parentPath = Path.parent(point.path)
          const parentNode = Node.parent(editor, point.path)
          if (Element.isElement(parentNode)) {
            const config = this.customElementMap.get(parentNode.type) as ICustomBlockElementConfig<BE> | undefined
            if (config) {
              const handler = get(config.events)
              if (handler) {
                if (handler(editor, point.path)) {
                  event.preventDefault()
                  return
                }
              }
            }
            // TODO: refactor by mdast content rules
            if (parentNode.type === 'paragraph') {
              const grandParentNode = Node.parent(editor, parentPath)
              if (Element.isElement(grandParentNode)) {
                const config = this.customElementMap.get(grandParentNode.type) as ICustomBlockElementConfig<BE> | undefined
                if (config?.wrappingParagraph) {
                  const handler = get(config.events)
                  if (handler && handler(editor, point.path)) {
                    event.preventDefault()
                    return
                  }
                }
              }
            }
          }
        }
      }
    }

    const onTab = withCommonEventBlockHandler(toggle => toggle.onTab)

    const decorationStack = new DecorationStack(this, editor)

    const decorate = (entry: NodeEntry) => {
      return decorationStack.process(entry)
    }

    const onInsertImage = (images: File[], range: Range | null) => {
      const ref = range ? Editor.rangeRef(editor, range) : null
      if (editor.uploadFile) {
        Promise.all(images.map(editor.uploadFile))
          .then((urls) => urls.flatMap((url, i) => ([
            { text: ''},
            {
              type: 'image',
              url,
              title: undefined,
              alt: images[i].name,
              children: [{ text: '' }],
            } as Image,
          ])))
          .then(fragment => {
            if (ref?.current) {
              Transforms.select(editor, ref.current)
            }
            editor.insertFragment(fragment.concat({ text: '' }))
          })
          .catch(console.error)
      }
    }

    const handleFiles = (dt: DataTransfer, range: Range | null) => {
      const images = [...dt.files].filter(file => /image\/*/.test(file.type))
      if (images.length > 0) {
        onInsertImage(images, range)
      }
    }

    const onPaste = (event: ClipboardEvent) => {
      const dt = event.clipboardData
      if (!dt) {
        return
      }
      handleFiles(dt, editor.selection)
    }

    const onDrop = (event: DragEvent) => {
      handleFiles(event.dataTransfer, ReactEditor.findEventRange(editor, event))
    }

    return {
      renderElement: (props) => {
        const config = this.customElementMap.get((props.element as any).type)
        if (config) {
          return config.render(editor, props as any)
        } else {
          console.warn(`${(props.element as any).type} not impl`)
          return createElement('div', props.attributes, props.children)
        }
      },
      renderLeaf: (props) => {
        if (this.textConfig) {
          return this.textConfig.render(editor, props as TypedRenderLeafProps<T>)
        } else {
          return createElement('span', props.attributes, props.children)
        }
      },
      decorate: decorate as any,
      onDOMBeforeInput: event => {
        batch(editor, () => {
          switch (event.inputType) {
            case 'insertText':
              handleInsertText(event)
              break
            case 'deleteContentBackward':
              handleDeleteText(event)
              break
            case 'insertParagraph':
              handleInsertParagraph(event)
              break
            case 'insertFromPaste':
              break
          }
        })
      },
      onKeyDown: event => {
        batch(editor, () => {
          if (isHotkey('tab', event)) {
            onTab(event)
            return
          }
          if (isHotkey(['ctrl+enter'], event)) {
            Transforms.insertText(editor, '\n')
            return
          }
        })
      },
      onSelect: (e) => {
        const selection = window.getSelection()
        if (selection) {
          if (selection.isCollapsed) {
            editor.hideSelectionToolbar()
          } else if (selection.rangeCount > 0) {
            editor.updateSelectionToolbar(selection.getRangeAt(0))
          }
        }
      },
      onBlur: (event) => {
        editor.hideSelectionToolbar()
      },
      onClick: () => {
        // const selection = window.getSelection()
        // if (selection && selection.isCollapsed && selection.rangeCount > 0) {
        //   const range = selection.getRangeAt(0)
        //   const slateRange = ReactEditor.toSlateRange(editor, range, { exactMatch: true })
        //   if (slateRange && editor.selection && Range.equals(slateRange, editor.selection)) {
        //     editor.toggleSelectionToolbar(range)
        //   }
        // }
      },
      onPaste,
      onDrop,
    }
  }

  createDefaultChildren (editor: Editor): JSX.Element[] {
    return []
  }
}

function isFirstTextPoint (editor: Editor, point: Point): boolean {
  return point.offset === 0
    && !Path.hasPrevious(point.path)
    && Text.isText(Node.get(editor, point.path))
}

function batch (editor: Editor, fn: (preventNormalizing: () => void) => void) {
  let prevent = true
  Editor.withoutNormalizing(editor, () => {
    fn(() => {
      prevent = false
    })
  })
  if (!prevent) {
    Editor.normalize(editor)
  }
}
