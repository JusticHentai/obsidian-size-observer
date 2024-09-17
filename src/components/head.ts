import Component from '../types/Component'

const back = (path: string): Component => {
  return {
    type: 'div',
    class: 'tree-item-inner nav-file-title-content head',
    text: path,
  }
}

export default back
