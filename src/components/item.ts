import { Component, DataItem } from '../types'
import randomStyle from '../utils/randomStyle'

const item = (data: DataItem): Component => {
  const { path } = data
  const displayPath = path.match(/[^/\\]+$/)?.[0] || ''

  return {
    type: 'div',
    class: 'item',
    path: path,
    style: randomStyle(),
    children: [
      {
        type: 'div',
        class: 'tree-item-inner nav-file-title-content path',
        text: `${displayPath} | ${data.percent}%`,
      },
    ],
  }
}

export default item
