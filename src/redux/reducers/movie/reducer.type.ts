import { IResultProps } from '@libraries/types/result.type'

export type IActionsProps = {
  type: string
  payload: IStateProps
}

export type IStateProps = {
  movies: IResultProps[]
  releaseDate?: IReleaseDateProps
  page?: number
  query?: string
}

export type IStateSelectorProps = {
  movie?: IStateProps
}

export type IReleaseDateProps = {
  year: number
  gte: string
  lte: string
}

export type ISearchProps = {
  query: string
}
