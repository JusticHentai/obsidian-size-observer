import Component from '../types/Component'

const back = (): Component => {
  return {
    type: 'div',
    class:
      'workspace-tab-header tappable is-active workspace-tab-header-inner workspace-tab-header-inner-icon back',
  }
}

export default back
