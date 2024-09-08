export interface File {
  path: string
  children?: File[]
  stat?: {
    size?: number
  }
}

export type DateItem = {
  path: string
  size: number
  displaySize: string
  children?: DateItem[]
}
