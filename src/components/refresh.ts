import { Component } from '../types'

const refresh = (): Component => {
  return {
    type: 'div',
    class:
      'workspace-tab-header tappable is-active workspace-tab-header-inner workspace-tab-header-inner-icon refresh',
  }
}

export default refresh
