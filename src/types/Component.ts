export default interface Component {
  type: string
  class: string
  text?: string
  children?: Component[]
  path?: string
  width?: number
}
