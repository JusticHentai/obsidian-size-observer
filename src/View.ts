import { ItemView, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import { DataItem } from './types'
import getData from './utils/getData'
import render from './utils/render'

export const VIEW_TYPE = 'sizeObserver'

export default class View extends ItemView {
  data: DataItem
  current: DataItem

  constructor(leaf: WorkspaceLeaf) {
    super(leaf)

    this.current = this.data = getData((leaf as any)?.app?.vault?.fileMap)

    this.contentEl.addEventListener('click', (e) => {
      console.log(e.target)
    })

    this.updateView()
  }

  clickCb = (e: MouseEvent) => {}

  updateView = () => {
    this.contentEl.innerHTML = ''

    render(this.contentEl, base(this.current))
  }

  getViewType = (): string => {
    return VIEW_TYPE
  }

  getDisplayText = (): string => {
    return 'Size Observer'
  }

  getIcon = (): string => {
    return 'ruler'
  }
}
