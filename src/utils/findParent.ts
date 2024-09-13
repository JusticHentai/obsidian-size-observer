const findParent = (
  element: HTMLElement,
  attributeList: string[]
): string | undefined => {
  let curr: HTMLElement | null = element

  while (curr) {
    for (const attribute of attributeList) {
      const res = curr.getAttribute(attribute)

      if (res) {
        return res
      }
    }

    curr = curr.parentElement
  }
}

export default findParent
