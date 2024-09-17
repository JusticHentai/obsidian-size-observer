import Component from '../types/Component'
import DataItem from '../types/DataItem'
import back from './back'
import head from './head'
import ItemList from './itemList'

const base = (data: DataItem): Component => {
  return {
    type: 'div',
    class: 'base',
    children: [
      { type: 'div', class: 'top', children: [back(), head(data.path)] },
      ItemList(data.children),
    ],
  }
}

export default base
