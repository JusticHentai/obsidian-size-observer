import Component from '../types/Component'
import DataItem from '../types/DataItem'
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
