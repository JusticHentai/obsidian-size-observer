const list = [
  {
    bg: '#21372c',
    color: '#21f62c',
  },
  {
    bg: '#37322c',
    color: '#f3c22c',
  },
  {
    bg: '#35252c',
    color: '#e0472c',
  },
  {
    bg: '#382139',
    color: '#fe21b1',
  },
  {
    bg: '#302f39',
    color: '#afaaad',
  },
  {
    bg: '#212840',
    color: '#2166ee',
  },
  {
    bg: '#38363d',
    color: '#f5e1c5',
  },
  {
    bg: '#21212c',
    color: '#f8f8f2',
  },
  {
    bg: '#38322c',
    color: '#ffc12c',
  },
  {
    bg: '#372f3a',
    color: '#f2abbb',
  },
  {
    bg: '#213534',
    color: '#21df83',
  },
]

let count = 0

const randomStyle = () => {
  const index = count % list.length

  count++

  const { bg, color } = list[index]

  return `background-color: ${bg}; color: ${color};`
}

export default randomStyle
