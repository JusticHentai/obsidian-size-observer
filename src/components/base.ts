import { Component, DataItem } from '../types'
import ItemList from './itemList'

const base = (data: DataItem): Component => {
  return {
    type: 'div',
    class: 'base',
    children: [ItemList(data.children)],
  }
}

export default base
