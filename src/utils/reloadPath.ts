import { DataItem } from '../types'

const reloadPath = (
  data: DataItem,
  prevList: DataItem[]
): [DataItem, DataItem[]] => {
  prevList.shift()
  let current = data
  const newPrevList = []

  for (const prev of prevList) {
    let find = false

    for (const child of current.children || []) {
      if (prev.path === child.path) {
        newPrevList.push(current)
        current = child
        find = true
      }
    }

    if (!find) {
      break
    }
  }

  return [current, newPrevList]
}

export default reloadPath
