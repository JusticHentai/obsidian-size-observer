import formatSize from './formatSize'
import { DateItem, File } from './types'

export default class Date {
  dateMap: DateItem
  fileMap: any

  constructor(fileMap: any) {
    this.fileMap = fileMap
  }

  startTravel = () => {
    const root = this.fileMap['/']

    this.dateMap = this.travel(root)
  }

  travel = (next: File): DateItem => {
    const path: string = next.path
    const size: number = next?.stat?.size || 0

    if (!next?.children?.length) {
      return { path, size, displaySize: formatSize(size) }
    }

    // ----------------------------------------------------------------

    let childrenSize = 0
    const childrenDateItemList = []

    for (const child of next.children) {
      const childrenDateItem = this.travel(child)

      childrenSize += childrenDateItem.size
      childrenDateItemList.push(childrenDateItem)
    }

    return {
      path,
      size: childrenSize,
      displaySize: formatSize(childrenSize),
      children: childrenDateItemList,
    }
  }
}
