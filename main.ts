import { App, Plugin, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian'
import View, { VIEW_TYPE } from 'src/View'

interface MyPluginSettings {
  mySetting: string
}

const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: 'default',
}

export default class SizeObserver extends Plugin {
  settings: MyPluginSettings
  view: View

  async onload() {
    await this.loadSettings()

    this.addSettingTab(new SizeObserverSettingTab(this.app, this))

    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => {
      const view = new View(leaf)

      this.view = view

      return view
    })

    this.addCommand({
      id: 'open-size-observer',
      name: 'Open view',
      callback: () => {
        this?.app?.workspace?.getRightLeaf(false)?.setViewState({
          type: VIEW_TYPE,
        })
      },
    })
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  async saveSettings() {
    await this.saveData(this.settings)
  }
}

class SizeObserverSettingTab extends PluginSettingTab {
  plugin: SizeObserver

  constructor(app: App, plugin: SizeObserver) {
    super(app, plugin)
    this.plugin = plugin
  }

  display(): void {
    const { containerEl } = this

    containerEl.empty()

    new Setting(containerEl)
      .setName('Setting #1')
      .setDesc("It's a secret")
      .addText((text) =>
        text
          .setPlaceholder('Enter your secret')
          .setValue(this.plugin.settings.mySetting)
          .onChange(async (value) => {
            this.plugin.settings.mySetting = value
            await this.plugin.saveSettings()
          })
      )
  }
}
