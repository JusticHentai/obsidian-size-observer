import { DataItem, File } from '../types'
import formatSize from './formatSize'

const getData = (fileMap: any): DataItem => {
  const root = fileMap['/']

  return travel(root)
}

export default getData

const travel = (next: File): DataItem => {
  const path: string = next.path
  const size: number = next?.stat?.size || 0

  if (!next?.children?.length) {
    return { path, size, displaySize: formatSize(size) }
  }

  // ----------------------------------------------------------------

  let childrenSize = 0
  const childrenDataItemList = []

  for (const child of next.children) {
    const childrenDataItem = travel(child)

    childrenSize += childrenDataItem.size
    childrenDataItemList.push(childrenDataItem)
  }

  for (const child of childrenDataItemList) {
    const { size } = child

    child.percent = Math.floor((size / childrenSize) * 100)
  }

  return {
    path,
    size: childrenSize,
    displaySize: formatSize(childrenSize),
    children: childrenDataItemList,
  }
}
