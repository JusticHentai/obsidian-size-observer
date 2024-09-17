import isArray from './isArray'

const findParent = (
  element: HTMLElement,
  attributeMap: Record<string, string | string[]>
): [string, string] | undefined => {
  let curr: HTMLElement | null = element

  while (curr) {
    for (const attribute in attributeMap) {
      const value = curr.getAttribute(attribute)

      if (isArray(attributeMap[attribute])) {
        for (const item of attributeMap[attribute]) {
          if (value?.includes(item)) {
            return [attribute, value]
          }
        }
      } else {
        if (value?.includes(attributeMap[attribute])) {
          return [attribute, value]
        }
      }
    }

    curr = curr.parentElement
  }
}

export default findParent
