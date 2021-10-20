import React, { useCallback, useState } from 'react'
import TiEditor from './index'
import './app.less'
import { EditorFactory } from '@/slate-markdown/core/editor-factory'
import layoutPlugin from '@/plugins/layout'
import { HistoryEditor } from 'slate-history'
import { Descendant } from 'slate'
import VirtualSectionInput from '@/plugins/layout/virtual-section-input'
import { instructionsMd } from '@/instructions'

function config (factory: EditorFactory) {
  factory.use(layoutPlugin)
  factory.configSections([
    {
      type: 'section', children: [
        {
          type: 'heading', depth: 1, children: [
            { text: 'section 1', inlineCode: true },
            { text: ' 无法修改或删除，使用方法查看 ' },
            { text: 'plugins/layout', inlineCode: true },
          ],
        },
        {
          type: 'blockquote', children: [{
            type: 'paragraph', children: [
              { text: '用于固定的内容结构' },
            ],
          }],
        },
      ],
    },
    {
      type: 'section', children: [
        {
          type: 'heading', depth: 1, children: [
            { text: 'section 2', inlineCode: true },
          ],
        },
      ],
    },
  ])
  factory.onEditorMounted(editor => {
    setTimeout(() => {
      HistoryEditor.withoutSaving(editor, () => {
        editor.setSectionMarkdown(0, 'write something here')
        editor.setSectionMarkdown(1, instructionsMd)
      })
    })
  })
}

async function uploadFile (file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function() {
      setTimeout(() => {
        resolve(reader.result as string)
      }, 500)
    }
    reader.onerror = function () {
      reject(reader.error)
    }
    reader.readAsDataURL(file)
  })
}

function App (): JSX.Element {
  const [value, setValue] = useState<Descendant[]>([])

  const onChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue)
  }, [value])

  const [first, setFirst] = useState<Descendant[]>([])
  const [second, setSecond] = useState<Descendant[]>([])

  return (
    <div>
      <TiEditor
        config={config}
        onChange={onChange}
        uploadFile={uploadFile}
        value={value}
      >
        <VirtualSectionInput
          onChange={setFirst}
          section={0}
          value={first}
        />

        <VirtualSectionInput
          onChange={setSecond}
          section={1}
          value={second}
        />
      </TiEditor>
    </div>
  )
}

export default App
