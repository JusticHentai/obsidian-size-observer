export interface File {
  path: string
  children?: File[]
  stat?: {
    size?: number
  }
}

export type DataItem = {
  path: string
  size: number
  displaySize: string
  children?: DataItem[]
  percent?: number
}

export interface Component {
  type: string
  class: string
  text?: string
  children?: Component[]
}
