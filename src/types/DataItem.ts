import { TFile, TFolder } from 'obsidian'

export default interface DataItem {
  path: string
  size: number
  displaySize: string
  children?: DataItem[]
  percent?: number
  raw: TFile | TFolder
}
