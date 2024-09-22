import { TFile, TFolder } from 'obsidian'

export interface DataItem {
  path: string
  size: number
  children?: DataItem[]
  percent?: number
  raw: TFile | TFolder
}

export interface Component {
  type: string
  class: string
  text?: string
  children?: Component[]
  path?: string
}
