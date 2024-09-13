import { ItemView, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import CONTENT_ELEMENT from './constants/contentEl'
import HEAD from './constants/head'
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

    const path = findParent(element, ['path', 'class'])

    if (!path || path === CONTENT_ELEMENT) {
      return
    }

    if (path === HEAD && this.prev.length) {
      const prevElement = this.prev.pop()!

      this.current = prevElement

      this.updateView()

      return
    }

    this.updateCurrent(path)
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
