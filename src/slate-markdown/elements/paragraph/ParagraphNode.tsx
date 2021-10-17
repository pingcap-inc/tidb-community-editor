import { defineNode, TypedRenderElementProps } from '/src/slate-markdown/core/elements'
import { Paragraph } from 'remark-slate-transformer/lib/transformers/mdast-to-slate'
import { Editor } from 'slate'
import React from 'react'
import LineWrapper from '/src/components/line-wrapper/LineWrapper'
import classNames from 'classnames'

const ParagraphNode = defineNode<Paragraph>({
  type: 'paragraph',
  isLeaf: false,
  isInline: false,
  isVoid: false,
  wrappingParagraph: false, // only for trigger; do not add block event handlers. add them in list item.
  toggle: {},
  events: {},
  render (editor: Editor, { element, attributes, children }: TypedRenderElementProps<Paragraph>): JSX.Element {
    return (
      <LineWrapper element={element}>
        {({ active }) => (
          <p
            className={classNames({ active })}
            {...attributes}
          >
            {children}
          </p>
        )}
      </LineWrapper>
    )
  },
  toolbarItems: []
})

export default ParagraphNode