import { ItemView, TFile, TFolder, WorkspaceLeaf } from 'obsidian'
import base from './components/base'
import {
  BACK,
  CONTENT_ELEMENT,
  ICON,
  REFRESH,
  VIEW_DISPLAY,
  VIEW_TYPE,
} from './constants'
import { DataItem } from './types'
import findParent from './utils/findParent'
import getData from './utils/getData'
import reloadPath from './utils/reloadPath'
import render from './utils/render'

export default class View extends ItemView {
  data: DataItem
  current: DataItem
  prev: DataItem[] = []
  leaf: WorkspaceLeaf

  constructor(leaf: WorkspaceLeaf) {
    super(leaf)

    this.leaf = leaf

    this.contentEl.addEventListener('click', this.clickCb.bind(this))

    const root = this.app.vault.getRoot()

    this.current = this.data = getData(root)

    this.updateView()
  }

  clickCb(e: MouseEvent) {
    const element = (e?.target as HTMLElement) || document.createElement('div')

    const attributeRes = findParent(element, {
      path: '',
      class: [CONTENT_ELEMENT, BACK, REFRESH],
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

    if (attribute === 'class' && value.includes(REFRESH)) {
      this.prev.push(this.current)

      const root = this.app.vault.getRoot()

      this.data = getData(root)

      const [current, prevList] = reloadPath(this.data, this.prev)

      this.current = current
      this.prev = prevList

      this.updateView()
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
      if (child.raw instanceof TFolder) {
        this.prev.push(this.current)
        this.current = child
      }

      if (child.raw instanceof TFile) {
        this.app.workspace.openLinkText(child.path, '', true)
      }

      break
    }

    this.updateView()
  }

  updateView() {
    while (this.contentEl.firstChild) {
      this.contentEl.removeChild(this.containerEl.firstChild as HTMLElement)
    }

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
