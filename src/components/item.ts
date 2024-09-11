import { Component, DataItem } from '../types'

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
        class: 'path',
        text: displayPath,
        path: displayPath,
        width: percent,
      },
      {
        type: 'div',
        class: 'percent',
        text: `${data.percent}%`,
        path: displayPath,
      },
    ],
  }
}

export default item
