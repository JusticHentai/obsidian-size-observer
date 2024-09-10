import { Component, DataItem } from '../types'

const item = (data: DataItem): Component => {
  const { path } = data
  const displayPath = path.match(/[^/\\]+$/)?.[0] || ''

  return {
    type: 'div',
    class: 'item',
    children: [
      {
        type: 'div',
        class: 'path',
        text: displayPath,
      },
      {
        type: 'div',
        class: 'percent',
        text: `${data.percent}%`,
      },
    ],
  }
}

export default item
