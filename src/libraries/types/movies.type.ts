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
