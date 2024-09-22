import { Plugin, WorkspaceLeaf } from 'obsidian'
import View from 'src/View'
import { ICON, OPEN_VIEW_COMMAND, RIBBON_DESC, VIEW_TYPE } from 'src/constants'
import openView from 'src/utils/openView'

export default class SizeObserver extends Plugin {
  async onload() {
    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => new View(leaf))

    this.addCommand({
      id: OPEN_VIEW_COMMAND.id,
      name: OPEN_VIEW_COMMAND.name,
      callback: () => openView(this.app.workspace),
    })

    this.addRibbonIcon(ICON, RIBBON_DESC, () => openView(this.app.workspace))
  }

  onunload() {}
}
