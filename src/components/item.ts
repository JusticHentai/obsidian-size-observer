import Component from '../types/Component'
import DataItem from '../types/DataItem'

const item = (data: DataItem): Component => {
  const { path, percent } = data
  const displayPath = path.match(/[^/\\]+$/)?.[0] || ''

  return {
    type: 'div',
    class: 'item',
    path: displayPath,
    children: [
      {
        type: 'div',
        class: 'tree-item-inner nav-file-title-content path',
        text: displayPath,
        path: displayPath,
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
        path: displayPath,
      },
    ],
  }
}

export default item
