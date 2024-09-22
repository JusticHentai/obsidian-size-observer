import { TFile, TFolder } from 'obsidian'
import { DataItem } from '../types'

const getData = (root: TFolder): DataItem => {
  return travel(root)
}

export default getData

const travel = (next: TFile | TFolder): DataItem => {
  const path: string = next.path

  if (next instanceof TFile) {
    const size = next.stat.size

    return { path, size, raw: next }
  }

  // ----------------------------------------------------------------

  let childrenSize = 0
  let childrenDataItemList = []

  for (const child of next.children) {
    const childrenDataItem = travel(child as any)

    childrenSize += childrenDataItem.size
    childrenDataItemList.push(childrenDataItem)
  }

  for (const child of childrenDataItemList) {
    const { size } = child

    if (childrenSize) {
      child.percent = Math.floor((size / childrenSize) * 100)
    } else {
      child.percent = Math.floor(100 / childrenDataItemList.length)
    }
  }

  childrenDataItemList = childrenDataItemList.sort((a, b) => b.size - a.size)

  return {
    path,
    size: childrenSize,
    children: childrenDataItemList,
    raw: next,
  }
}
