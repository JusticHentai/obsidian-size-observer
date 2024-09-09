import { Component, DataItem } from '../types'
import item from './item'

const itemList = (dataList: DataItem[] = []): Component => {
  const children = dataList.map((data) => item(data))

  return {
    type: 'div',
    class: 'itemList',
    children,
  }
}

export default itemList
