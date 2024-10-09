import { App, Plugin, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian'
import View from 'src/View'
import {
  DEFAULT_SETTINGS,
  ICON,
  OPEN_VIEW_COMMAND,
  RIBBON_DESC,
  VIEW_TYPE,
} from 'src/constants'
import openView from 'src/utils/openView'

export default class SizeObserver extends Plugin {
  settings: {
    showRibbonIcon: boolean
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  async saveSettings() {
    await this.saveData(this.settings)
  }

  async onload() {
    await this.loadSettings()

    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => new View(leaf))

    this.addSettingTab(new SizeObserverSettingTab(this.app, this))

    this.addCommand({
      id: OPEN_VIEW_COMMAND.id,
      name: OPEN_VIEW_COMMAND.name,
      callback: () => openView(this.app.workspace),
    })

    if (this.settings.showRibbonIcon) {
      this.addRibbonIcon(ICON, RIBBON_DESC, () => openView(this.app.workspace))
    }
  }

  onunload() {}
}

class SizeObserverSettingTab extends PluginSettingTab {
  plugin: SizeObserver

  constructor(app: App, plugin: SizeObserver) {
    super(app, plugin)
    this.plugin = plugin
  }

  display() {
    const { containerEl } = this

    containerEl.empty()

    new Setting(containerEl)
      .setName('Show Ribbon Icon')
      .setDesc('Whether to show icons on the left')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.showRibbonIcon)
          .onChange(async (show) => {
            this.plugin.settings.showRibbonIcon = show

            await this.plugin.saveSettings()
          })
      )
  }
}
