import { Component } from '../types'

const back = (): Component => {
  return {
    type: 'div',
    class: 'icon-container',
    children: [
      {
        type: 'div',
        class:
          'workspace-tab-header workspace-tab-header-inner workspace-tab-header-inner-icon back',
      },
    ],
  }
}

export default back
