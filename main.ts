import { Plugin, WorkspaceLeaf } from 'obsidian'
import View from 'src/View'
import ICON from 'src/constants/icon'
import OPEN_VIEW_COMMAND from 'src/constants/openViewCommand'
import RIBBON_DESC from 'src/constants/ribbonDesc'
import VIEW_TYPE from 'src/constants/viewType'
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
