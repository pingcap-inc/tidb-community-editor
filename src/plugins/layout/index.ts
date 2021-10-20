import { EditorFactory } from '@/slate-markdown/core/editor-factory'
import el from './register-elements'
import remarkSectionPlugin from '@/plugins/layout/remark-utils'
import { CustomBlockElements } from '@/slate-markdown/core/elements'
import { Descendant, Editor, Node, Path, PathRef, Range, Span, Transforms } from 'slate'
import { isElementType } from '@/slate-markdown/slate-utils'
import { HistoryEditor } from 'slate-history'

declare module '@/components/ti-editor/TiEditor' {
  interface TiEditor {
    getSectionRange (index: number): Range | undefined

    getSectionSpan (index: number): Span | undefined

    setSection (index: number, fragment: Descendant[]): void

    getSection (index: number): Descendant[]

    setSectionMarkdown (index: number, fragment: string): void

    getSectionMarkdown (index: number): string

    onSectionLayout (section: number): void
  }
}

declare module '@/slate-markdown/core/editor-factory' {
  interface EditorFactory {
    configSections (sections: CustomBlockElements['section'][]): void

    registerOnChange: (handler: () => void) => () => void
    registerOnSectionLayout: (handler: (section: number) => void) => () => void
  }
}

export default function layoutPlugin (factory: EditorFactory): void {
  el.register(factory)

  factory.configSerializeProcessor(remarkSectionPlugin)

  let configuredSections: CustomBlockElements['section'][] = []

  factory.configSections = (sections: CustomBlockElements['section'][]) => {
    configuredSections = sections
  }

  const PATH_REFS = new WeakMap<Editor, PathRef[]>()

  factory.onWrapEditor(editor => {
    const { normalizeNode, deleteFragment, deleteBackward, deleteForward, insertFragment, runAction, onChange } = editor

    const pathRefs: PathRef[] = []
    PATH_REFS.set(editor, pathRefs)

    editor.insertFragment = fragment => {
      insertFragment(fragment.filter(node => !isElementType(node, 'section')))
    }

    editor.runAction = (key, location, event) => {
      if (location) {
        const range = Editor.range(editor, location)
        let exists = false
        for (const pathRef of pathRefs) {
          if (pathRef.current && Range.includes(range, pathRef.current)) {
            exists = true
            break
          }
        }
        if (exists) {
          editor.onAlert('无法操作固定内容', '')
          return false
        }
      }
      return runAction(key, location, event)
    }

    editor.deleteFragment = (dir) => {
      if (editor.selection) {
        let exists = false
        for (const pathRef of pathRefs) {
          if (pathRef.current && Range.includes(editor.selection, pathRef.current)) {
            exists = true
            break
          }
        }
        if (exists) {
          editor.onAlert('无法删除固定内容', '')
          return
        }
      }
      deleteFragment(dir)
    }

    editor.deleteBackward = (unit) => {
      if (editor.selection) {
        const point = Editor.before(editor, editor.selection, { unit })
        if (point) {
          if (isElementType(Editor.node(editor, point, { depth: 1 })[0], 'section')) {
            editor.onAlert('无法删除固定内容', '')
            return
          }
        }
      }
      deleteBackward(unit)
    }

    editor.deleteForward = (unit) => {
      if (editor.selection) {
        const point = Editor.after(editor, editor.selection, { unit })
        if (point) {
          if (isElementType(Editor.node(editor, point, { depth: 1 })[0], 'section')) {
            editor.onAlert('无法删除固定内容', '')
            return
          }
        }
      }
      deleteForward(unit)
    }

    editor.normalizeNode = (entry) => {
      normalizeNode(entry)
    }

    Object.defineProperty(editor, 'markdown', {
      get () {
        console.warn('editor.markdown was disabled for layout plugin, use editor.getSectionMarkdown instead')
      },
      set () {
        console.warn('editor.markdown was disabled for layout plugin, use editor.setSectionMarkdown instead')
      },
    })


    editor.getSectionSpan = i => {
      if (i >= pathRefs.length) {
        return undefined
      }
      let start = pathRefs[i].current
      if (!start) {
        return undefined
      }
      let end: Path | null
      if (i < pathRefs.length - 1) {
        end = pathRefs[i + 1].current
      } else {
        end = [editor.children.length - 1]
      }
      if (!end) {
        return undefined
      }
      start = Path.next(start)
      if (Path.hasPrevious(end)) {
        end = Path.previous(end)
      } else {
        end = start
      }
      if (Path.isBefore(end, start)) {
        end = start
      }
      if (!Editor.hasPath(editor, start) || !Editor.hasPath(editor, end)) {
        return undefined
      }
      return [start, end]
    }

    editor.getSectionRange = i => {
      const span = editor.getSectionSpan(i)
      if (!span) {
        return undefined
      }
      const [start, end] = span
      const anchor = Editor.start(editor, start)
      const focus = Editor.end(editor, end)
      return { anchor, focus }
    }

    editor.getSection = i => {
      const span = editor.getSectionSpan(i)
      if (!span) {
        return []
      }
      const [...nodes] = Editor.nodes(editor, { at: span, mode: 'highest', match: node => !Editor.isEditor(node) })
      return nodes.map(([node]) => node as Descendant)
    }

    editor.getSectionMarkdown = (i) => {
      return factory.generateMarkdown(editor.getSection(i))
    }

    editor.setSection = (i, fragments) => {
      const range = editor.getSectionRange(i)
      if (!range) {
        return
      }

      Transforms.select(editor, range)
      editor.insertFragment(fragments)
    }

    editor.setSectionMarkdown = (i, markdown) => {
      editor.setSection(i, factory.parseMarkdown(markdown))
    }

    editor.onChange = () => {
      onChange()
      Object.values(onChangeMap).forEach(cb => cb())
    }

    editor.onSectionLayout = (section) => {
      Object.values(onSectionLayoutMap).forEach(cb => cb(section))
    }
  })

  factory.onEditorMounted(editor => {
    const pathRefs = PATH_REFS.get(editor)
    if (!pathRefs) {
      throw new Error()
    }
    const insertSection = (section: CustomBlockElements['section'], i: number): PathRef => {
      Transforms.insertNodes(editor, [section, { type: 'paragraph', children: [{ text: '' }] }], { at: [i * 2] })
      return Editor.pathRef(editor, [i * 2])
    }

    HistoryEditor.withoutSaving(editor, () => {
      Editor.withoutNormalizing(editor, () => {
        if (configuredSections.length) {
          if (pathRefs.length === 0) {
            for (let i = 0; i < configuredSections.length; ++i) {
              pathRefs[i] = insertSection(configuredSections[i], i)
            }
            return
          }
        }
      })
    })
    for (let i = 0; i < configuredSections.length; ++i) {
      editor.onSectionLayout(i)
    }

  })

  let i = 0
  const onChangeMap: Record<number, () => void> = {}
  const onSectionLayoutMap: Record<number, (section: number) => void> = {}

  factory.registerOnChange = handler => {
    const id = ++i
    onChangeMap[id] = handler
    return () => {
      delete onChangeMap[i]
    }
  }

  factory.registerOnSectionLayout = handler => {
    const id = ++i
    onSectionLayoutMap[id] = handler
    return () => {
      delete onSectionLayoutMap[i]
    }
  }

}

export { default as VirtualSectionInput } from './virtual-section-input'
