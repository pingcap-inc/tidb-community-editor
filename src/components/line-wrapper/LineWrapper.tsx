/* eslint-disable react/jsx-no-bind */
import { RemarkBlockElement } from '/src/slate-markdown/core/elements'
import Tippy from '@tippyjs/react/headless'
import PopContent from '/src/components/line-wrapper/PopContent'
import './style.less'
import { useLayoutEffect, useRef, useState } from 'react'
import { ReactEditor, useSlateStatic } from 'slate-react'
import { Editor, Node, Path, PathRef, Text } from 'slate'
import useBlockToolItems from '/src/components/line-wrapper/useBlockToolItems'
import useForceUpdate from '/src/hooks/forceUpdate'

const EOF = String.fromCharCode(0xfe, 0xff)

export interface TopLevelBlockProps {
  element: RemarkBlockElement
  children: JSX.Element | ((ctx: LineWrapperContext) => JSX.Element)
}

interface LineWrapperContext {
  active: boolean
  pathRef: PathRef | undefined
}

export default function LineWrapper ({ element, children }: TopLevelBlockProps): JSX.Element {

  const [el, setEl] = useState<Element | null>(null)
  const pathRef = useRef<PathRef>()

  const editor = useSlateStatic()

  const items = useBlockToolItems(editor, pathRef.current)

  const forceUpdate = useForceUpdate()

  useLayoutEffect(() => {
    if (el) {
      const dr = document.createRange()
      dr.selectNode(el.childNodes.item(0))
      const range = ReactEditor.toSlateRange(editor, dr, { exactMatch: false })

      let path = Path.common(range.anchor.path, range.focus.path)
      while (path.length !== 0) {
        if (Editor.isBlock(editor, Node.get(editor, path))) {
          pathRef.current = Editor.pathRef(editor, path)
          break
        }
        path = Path.parent(path)
      }
    } else {
      if (pathRef.current) {
        pathRef.current.unref?.()
      }
      pathRef.current = undefined
    }
  }, [el])

  const [active, setActive] = useState(false)

  const isEmpty = (() => {
    const node = element.children[0]
    return element.children.length === 1 && Text.isText(node) && node.text === ''
  })()

  return (
    <Tippy
      appendTo={document.body}
      arrow={false}
      hideOnClick={false}
      interactive
      interactiveBorder={12}
      offset={[0, 8]}
      onTrigger={forceUpdate}
      placement="left"
      popperOptions={{
        modifiers: [
          {
            name: 'flip', options: {
              allowedAutoPlacements: ['left'],
            },
          },
        ],
      }}
      ref={setEl}
      render={() => (
        <PopContent
          element={element}
          isEmpty={isEmpty}
          items={items}
          setActive={setActive}
        />
      )}
    >
      {typeof children === 'function' ? children({ active, pathRef: pathRef.current }) : children}
    </Tippy>
  )
}
