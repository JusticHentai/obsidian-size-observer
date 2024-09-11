import { ItemView, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import { DataItem } from './types'
import getData from './utils/getData'
import render from './utils/render'

export const VIEW_TYPE = 'sizeObserver'

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
    const className = e?.target?.getAttribute('class') || ''

    if (className === 'head') {
      const prev = this.prev.pop()

      if (!prev) {
        return
      }

      this.current = prev
      this.updateView()

      return
    }

    const path = e?.target?.getAttribute('path') || ''

    if (path) {
      this.updateCurrent(path)

      return
    }

    const pathElement = e?.target?.getElementsByClassName('path')

    const newPath = [...pathElement]?.[0]?.getAttribute('path') || ''
    this.updateCurrent(newPath)
  }

  updateCurrent(path: string) {
    for (const child of this.current.children!) {
      if (child.path !== path) {
        continue
      }

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
    return 'Size Observer'
  }

  getIcon(): string {
    return 'ruler'
  }
}
