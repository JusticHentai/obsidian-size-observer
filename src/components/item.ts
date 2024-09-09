import { Component, DataItem } from '../types'

const item = (data: DataItem): Component => {
  return {
    type: 'div',
    class: 'item',
    children: [
      {
        type: 'div',
        class: 'path',
        text: data.path,
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
