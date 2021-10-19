/* eslint-disable react/jsx-max-depth */
import { defineNode, MdastContentType } from '/src/slate-markdown/core/elements'
import { Table } from 'remark-slate-transformer/lib/transformers/mdast-to-slate'
import LineWrapper from '/src/components/line-wrapper/LineWrapper'
import { TableContext } from '/src/slate-markdown/elements/table/context'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTable)

const TableNode = defineNode<Table>({
  type: 'table',
  isInline: false,
  isLeaf: false,
  contentType: MdastContentType.flow,
  contentModelType: MdastContentType.table,
  wrappingParagraph: false,
  events: {},
  toggle: {},

  render: (editor, { element, attributes, children }) => {
    const [heading, ...body] = children
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const headerContextProps = { isHeader: true, align: element.align }
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const bodyContextProps = { isHeader: false, align: element.align }
    return (
      <LineWrapper element={element}>
        <table {...attributes}>
          <TableContext.Provider value={headerContextProps}>
            <thead>
              {heading}
            </thead>
          </TableContext.Provider>

          <TableContext.Provider value={bodyContextProps}>
            <tbody>
              {body}
            </tbody>
          </TableContext.Provider>
        </table>
      </LineWrapper>
    )
  },
})

export default TableNode
