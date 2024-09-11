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

  if (path) {
    div.setAttribute('path', path)
  }

  if (width !== undefined) {
    div.style.width = `${(width / 100) * 10 + 9}em`
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
