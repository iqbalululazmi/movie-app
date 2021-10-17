import { IResultProps } from '@libraries/types/result.type'

export type IActionsProps = {
  type: string
  payload: IStateProps
}

export type IStateProps = {
  movies: IResultProps[]
  releaseDate?: string
  page?: number
}

export type IStateSelectorProps = {
  movie?: IStateProps
}
