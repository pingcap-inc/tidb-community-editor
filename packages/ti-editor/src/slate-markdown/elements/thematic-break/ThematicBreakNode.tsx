import { defineNode, MdastContentType, TypedRenderElementProps } from '../../core/elements'
import { ThematicBreak } from 'remark-slate-transformer/lib/transformers/mdast-to-slate'
import { Editor, Path, Transforms } from 'slate'
import VoidElement from '../../../components/void-element/void-element'
import LineWrapper from '../../../components/line-wrapper/LineWrapper'
import { ReactEditor } from 'slate-react'

export default defineNode<ThematicBreak>({
  type: 'thematicBreak',
  isLeaf: false,
  isInline: false,
  wrappingParagraph: false,
  contentType: MdastContentType.flow,
  contentModelType: null,
  render (editor: Editor, { element, children, attributes }: TypedRenderElementProps<ThematicBreak>): JSX.Element {
    return (
      <LineWrapper element={element}>
        <VoidElement attributes={attributes}>
          <hr />

          {children}
        </VoidElement>
      </LineWrapper>
    )
  },
  toggle: {
    prefix: /^---$/,
    estimatePrefixLength: 3,
    toggle: (editor, path, params) => {
      if (params) {
        Transforms.removeNodes(editor, { at: path })
        Transforms.insertNodes(editor, { type: 'paragraph', children: [{ text: '' }] }, { at: path })
        Transforms.insertNodes(editor, { type: 'thematicBreak', children: [] }, { at: path })
        ReactEditor.deselect(editor)
        Transforms.select(editor, Editor.start(editor, Path.next(path)))
      } else {
        Transforms.setNodes(editor, { type: 'thematicBreak', children: [{ text: '' }] }, { at: path })
      }
    },
    onTrigger: (prefix, editor, path) => {
      if (path.length > 1) {
        return undefined
      }
      return true
    },
  },
  events: {},
})

