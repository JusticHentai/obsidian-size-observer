const unitMap = ['B', 'KB', 'MB', 'GB']

const formatSize = (size: number): string => {
  let count = 0
  let res = size

  while (Math.floor(res / 1024)) {
    res = Math.floor(res / 1024)
    count++
  }

  return `${res}${unitMap[count]}`
}

export default formatSize
