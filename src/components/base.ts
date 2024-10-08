import { Component, DataItem } from '../types'
import back from './back'
import head from './head'
import ItemList from './itemList'
import refresh from './refresh'

const base = (data: DataItem): Component => {
  return {
    type: 'div',
    class: 'base',
    children: [
      {
        type: 'div',
        class: 'top',
        children: [back(), refresh(), head(data.path)],
      },
      ItemList(data.children),
    ],
  }
}

export default base
