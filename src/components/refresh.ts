import { Component } from '../types'

const refresh = (): Component => {
  return {
    type: 'div',
    class: 'icon-container',
    children: [
      {
        type: 'div',
        class:
          'workspace-tab-header workspace-tab-header-inner workspace-tab-header-inner-icon refresh',
      },
    ],
  }
}

export default refresh
