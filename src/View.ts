import { ItemView, WorkspaceLeaf } from 'obsidian'

export const VIEW_TYPE = 'sizeObserver'

export default class View extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf)
  }

  createView() {
    const viewContainer = this.containerEl
  }

  getViewType(): string {
    return VIEW_TYPE
  }

  getDisplayText(): string {
    return 'Size Observer'
  }
}
