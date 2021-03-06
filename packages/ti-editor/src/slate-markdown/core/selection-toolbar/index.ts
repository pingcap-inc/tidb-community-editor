import { EditorFactory } from '../editor-factory'
import { createElement } from 'react'
import SelectionToolbar from '../../../components/selection-toolbar/SelectionToolbar'
import { DOMRange } from 'slate-react/dist/utils/dom'

declare module '../../../components/ti-editor/TiEditor' {
  interface TiEditor {
    updateSelectionToolbar: (range?: DOMRange) => void
    hideSelectionToolbar: () => void
    toggleSelectionToolbar: (range?: DOMRange) => void
  }
}

export function coreSelectionToolbarPlugin (factory: EditorFactory): void {
  const createDefaultChildren = factory.createDefaultChildren.bind(factory)

  factory.createDefaultChildren = editor => {
    const children = createDefaultChildren(editor)
    children.push(createElement(SelectionToolbar, { key: 'selection-toolbar' }))
    return children
  }

  factory.onWrapEditor(editor => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    editor.updateSelectionToolbar = editor.hideSelectionToolbar = editor.toggleSelectionToolbar = () => {
    }
  })
}
