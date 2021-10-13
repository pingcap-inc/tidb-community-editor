import { Blockquote, Code, Heading, Image, InlineMath, List, ListItem, Paragraph, SlateNode, Text } from 'remark-slate-transformer/lib/transformers/mdast-to-slate'
import { Editor, Location, Path } from 'slate'
import { RenderElementProps, RenderLeafProps } from 'slate-react'
import { EditorFactory } from '/src/slate-markdown/core/editor-factory'

export type RemarkElement = Exclude<SlateNode, Text>
export type RemarkBlockElement = List | ListItem | Paragraph | Code | Heading | Blockquote
export type RemarkInlineElement = InlineMath | Image
export type RemarkText = Text
export type RemarkElementToggleParams<E extends RemarkElement, P extends Omit<E, 'type' | 'children'> = Omit<E, 'type' | 'children'>> =
  P extends Record<string, never> ? boolean : P | false
export type RemarkElementProps<E extends RemarkElement, P extends Omit<E, 'type' | 'children'> = Omit<E, 'type' | 'children'>> =
  P extends Record<string, never> ? void : P

export type CustomElementNormalizer<E extends RemarkElement> = (editor: Editor, element: E, path: Path, preventDefaults: () => void) => void
export type TypedRenderElementProps<E extends RemarkElement> = RenderElementProps & {
  element: E
}
export type TypedRenderLeafProps<T extends RemarkText> = RenderLeafProps & {
  leaf: T
  text: T
}

// returns true represents this event was consumed
export type BlockEventHandler = (editor: Editor, path: Path) => boolean

export type CustomBlockElementEvents = {
  // returns new toggle params to indicate event was consumed and stop this round of handlers
  onTab?: BlockEventHandler
  onStartDelete?: BlockEventHandler
  onStartEnter?: BlockEventHandler
}

export type CustomBlockElementToggle<T> = {
  // when triggered by prefix, gen a params or not call toggle by returns undefined
  // type <prefix> and a space to trigger toggle
  estimatePrefixLength?: number
  prefix: RegExp
  onTrigger: (prefix: string) => T | undefined
  toggle: (editor: Editor, path: Path, params: T) => void
} | Record<string, never>

export interface ICustomConfig {
  isLeaf: boolean

  register (editorFactory: EditorFactory): void
}

export interface ICustomElementConfig<E extends RemarkElement> extends ICustomConfig {
  isLeaf: false
  type: E['type']
  normalize?: CustomElementNormalizer<E>
  isInline: boolean
  isVoid: boolean

  render (editor: Editor, props: TypedRenderElementProps<E>): JSX.Element
}

export interface ICustomBlockElementConfig<E extends RemarkBlockElement> extends ICustomElementConfig<E> {
  isInline: false
  toggle: CustomBlockElementToggle<RemarkElementToggleParams<E>>
  events: CustomBlockElementEvents

  // heading is not while blockquote and listItem are.
  wrappingParagraph: boolean
}

export interface ICustomInlineElementConfig<E extends RemarkInlineElement> extends ICustomElementConfig<E> {
  isInline: true

  insert: (editor: Editor, location: Location, params: RemarkElementToggleParams<E>) => void
}

export interface ICustomTextConfig<T extends RemarkText> extends ICustomConfig {
  isLeaf: true

  render (editor: Editor, props: TypedRenderLeafProps<T>): JSX.Element
}

type AnyConfig =
  ICustomBlockElementConfig<RemarkBlockElement>
  | ICustomInlineElementConfig<RemarkInlineElement>
  | ICustomTextConfig<RemarkText>


export function defineNode<E extends RemarkBlockElement> (config: Omit<ICustomBlockElementConfig<E>, 'register'>): ICustomBlockElementConfig<E>
export function defineNode<E extends RemarkInlineElement> (config: Omit<ICustomInlineElementConfig<E>, 'register'>): ICustomInlineElementConfig<E>
export function defineNode<T extends RemarkText, P  = Record<string, unknown>> (config: Omit<ICustomTextConfig<T> & P, 'register'>): ICustomTextConfig<T> & P
export function defineNode<C extends AnyConfig> (config: Omit<C, 'register'>): C {
  return {
    ...config,
    register (editorFactory: EditorFactory) {
      editorFactory.define(config as never)
    },
  } as C
}