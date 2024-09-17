import { ItemView, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import BACK from './constants/back'
import CONTENT_ELEMENT from './constants/contentEl'
import ICON from './constants/icon'
import VIEW_DISPLAY from './constants/viewDisplay'
import VIEW_TYPE from './constants/viewType'
import DataItem from './types/DataItem'
import findParent from './utils/findParent'
import getData from './utils/getData'
import render from './utils/render'

export default class View extends ItemView {
  data: DataItem
  current: DataItem
  prev: DataItem[] = []

  constructor(leaf: WorkspaceLeaf) {
    super(leaf)

    this.current = this.data = getData((leaf as any)?.app?.vault?.fileMap)

    this.contentEl.addEventListener('click', this.clickCb.bind(this))

    this.updateView()
  }

  clickCb(e: any) {
    const element = e?.target || document.createElement('div')

    const attributeRes = findParent(element, {
      path: '',
      class: [CONTENT_ELEMENT, BACK],
    })

    if (!attributeRes) {
      return
    }

    const [attribute, value] = attributeRes

    if (attribute === 'class' && value.includes(CONTENT_ELEMENT)) {
      return
    }

    if (attribute === 'class' && value.includes(BACK) && this.prev.length) {
      const prevElement = this.prev.pop()!

      this.current = prevElement

      this.updateView()

      return
    }

    if (attribute === 'path') {
      this.updateCurrent(value)

      return
    }
  }

  updateCurrent(path: string) {
    for (const child of this.current.children!) {
      if (child.path !== path) {
        continue
      }

      // 是文件夹才进入下一层
      if (child?.children?.length) {
        this.prev.push(this.current)
        this.current = child
      }

      break
    }

    this.updateView()
  }

  updateView() {
    this.contentEl.innerHTML = ''

    const newElement = render(base(this.current))

    this.contentEl.appendChild(newElement)
  }

  getViewType(): string {
    return VIEW_TYPE
  }

  getDisplayText(): string {
    return VIEW_DISPLAY
  }

  getIcon(): string {
    return ICON
  }
}
