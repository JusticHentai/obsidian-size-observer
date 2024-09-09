const unitMap = ['B', 'KB', 'MB', 'GB']

const formatSize = (size: number): string => {
  let count = -1
  let res = size

  while (res) {
    res = Math.floor(res / 1024)
    count++
  }

  return `${res}${unitMap[count]}`
}

export default formatSize
