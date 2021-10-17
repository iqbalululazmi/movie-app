import MoviesRepository from '@libraries/repositories/movies'
import { IPayloadDiscoverMovieProps } from '@libraries/types/movies.type'
import { useDispatch, useSelector } from 'react-redux'
import {
  IReleaseDateProps,
  IStateProps,
  IStateSelectorProps,
} from './reducer.type'
import { fetchMovie, filterByYear } from './slices'

export const useMovieDispatch = () => {
  const { movie }: IStateSelectorProps = useSelector((state) => state)
  const dispatch = useDispatch()

  const doUpdateMovieData = async (props: IStateProps) => {
    dispatch(fetchMovie(props))
  }

  const doFilterByYear = async (props: IReleaseDateProps) => {
    dispatch(filterByYear(props))
    doFetchMovie({
      'release_date.gte': props.gte,
      'release_date.lte': props.lte,
    })
  }

  const doFetchMovie = async (props: IPayloadDiscoverMovieProps) => {
    try {
      const { results } = await MoviesRepository().fetchDiscoverMovie(props)
      dispatch(fetchMovie({ movies: results }))
    } catch (error) {
      dispatch(fetchMovie({ movies: [] }))
    }
  }

  return {
    movie,
    doFetchMovie,
    doUpdateMovieData,
    doFilterByYear,
  }
}
