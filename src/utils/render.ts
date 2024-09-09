import { Component } from '../types'

const render = (root: any, component: Component) => {
  const { type, class: cls, text, children } = component

  const next = root.createEl(type, {
    text,
    cls,
  })

  if (!children?.length) {
    return
  }

  for (const child of children) {
    render(next, child)
  }
}

export default render
