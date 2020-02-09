export interface PopupReturnValues {
  context: any
  opened: boolean
  onOpen: (args?: any) => void
  onClose: (args?: any) => void
}

export type ColumnItem = {
  id: string
  label: string
  content: string
}

export type Destination = {
  droppableId: number | string
  index: number
}

export type DraggableProps = {
  id: string
  label: string
  content: string
  innerRef: any
  draggableProps: any
  dragHandleProps: any
  isDragging: boolean
  theme: stylesheet
  popup: PopupReturnValues
  onCopy: (label: string, content: string) => void
}

export type Mode = 'FLUID'

export type onDragEndResult = {
  combine: null | any
  source: {
    droppableId: string
    index: number
  }
  destination: {
    droppableId: string
    index: number
  }
  draggableId: string
  mode: string
  reason: string
  type: string
}

export type Reason = 'DROP'

export type Source = Destination

export type Stylesheet =
  | 'coy'
  | 'dark'
  | 'funky'
  | 'okaidia'
  | 'solarizedlight'
  | 'tomorrow'
  | 'twilight'
  | 'prism'
  | 'atomDark'
  | 'base16AteliersulphurpoolLight'
  | 'cb'
  | 'darcula'
  | 'duotoneDark'
  | 'duotoneEarth'
  | 'duotoneForest'
  | 'duotoneLight'
  | 'duotoneSea'
  | 'duotoneSpace'
  | 'ghcolors'
  | 'hopscotch'
  | 'pojoaque'
  | 'vs'
  | 'xonokai'

export type UseCheatsheetAction =
  | { type: 'set-columns'; columns: Array<ColumnItem[]> }
  | { type: 'set-column-width'; width: number }
  | { type: 'set-theme'; theme: stylesheet }
  | { type: 'init'; theme: stylesheet; columns: Array<ColumnItem[]> }

export type UseCheatsheetState = {
  columns: Array<ColumnItem[]> | null
  columnWidth: number
  columnCount: number
  theme: stylesheet
}
