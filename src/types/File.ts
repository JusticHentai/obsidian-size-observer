export default interface File {
  path: string
  children?: File[]
  stat?: {
    size?: number
  }
}
