import { Component, DataItem } from '../types'

const item = (data: DataItem): Component => {
  const { path, percent } = data
  const displayPath = path.match(/[^/\\]+$/)?.[0] || ''

  return {
    type: 'div',
    class: 'item',
    path: path,
    children: [
      {
        type: 'div',
        class: 'tree-item-inner nav-file-title-content path',
        text: displayPath,
        width: percent,
      },
      {
        type: 'div',
        class: 'gap',
      },
      {
        type: 'div',
        class: 'tree-item-inner nav-file-title-content percent',
        text: `${data.percent}%`,
      },
    ],
  }
}

export default item
