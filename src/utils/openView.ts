import { Workspace, WorkspaceLeaf } from 'obsidian'
import VIEW_TYPE from '../constants/viewType'

const openView = (workspace: Workspace) => {
  const leafs = workspace.getLeavesOfType(VIEW_TYPE)

  let leaf: WorkspaceLeaf

  if (!leafs.length) {
    leaf = workspace.getRightLeaf(false) ?? workspace.getLeaf()

    leaf.setViewState({
      type: VIEW_TYPE,
    })
  } else {
    leaf = leafs.first()!
  }

  workspace.revealLeaf(leaf)
}

export default openView
