import { ItemView, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import Data from './Data'
import { DataItem } from './types'
import render from './utils/render'

export const VIEW_TYPE = 'sizeObserver'

export default class View extends ItemView {
  data: Data
  current: DataItem

  constructor(leaf: WorkspaceLeaf) {
    super(leaf)

    this.data = new Data((leaf as any)?.app?.vault?.fileMap)
    this.data.startTravel()

    this.initBaseView()
  }

  initBaseView() {
    const dataMap = this.data.dataMap
    render(this.containerEl, base(dataMap))
  }

  getViewType(): string {
    return VIEW_TYPE
  }

  getDisplayText(): string {
    return 'Size Observer'
  }
}
