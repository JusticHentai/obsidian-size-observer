import { setIcon } from 'obsidian'
import { Component } from '../types'

const render = (component: Component): HTMLElement => {
  const { type, class: cls, text, children, path, width } = component

  const div = document.createElement(type)

  if (text) {
    div.appendText(text)
  }

  if (cls) {
    div.setAttribute('class', cls)
  }

  if (cls?.includes('back')) {
    setIcon(div, 'arrow-big-left')
  }

  if (cls?.includes('refresh')) {
    setIcon(div, 'refresh-ccw')
  }

  if (path) {
    div.setAttribute('path', path)
  }

  if (!children?.length) {
    return div
  }

  for (const child of children) {
    const childElement = render(child)
    div.appendChild(childElement)
  }

  return div
}

export default render
