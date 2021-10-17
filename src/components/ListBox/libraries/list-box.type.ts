export type IListBoxProps = {
  options: IListBoxOptionsProps[]
  initialValue?: IListBoxOptionsProps
  callback: (e: IListBoxOptionsProps) => void
}

export type IListBoxOptionsProps = {
  label: string
  value: number
}
