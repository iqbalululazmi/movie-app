import { IResultProps } from './result.type'

export type IMoviesResponseProps = {
  movies: IResultProps[]
}

export type IMovieDetailProps = {
  movie: IResultProps
}

export type IMovieDetailContext = {
  params: IMovieDetailRoute
}

export type IMovieDetailRoute = {
  movieId: number
}

export type IPayloadDiscoverMovieProps = {
  page?: number
  language?: string
  'release_date.gte'?: string
  'release_date.lte'?: string
  query?: string
}
