import MoviesRepository from '@libraries/repositories/movies'
import { IPayloadDiscoverMovieProps } from '@libraries/types/movies.type'
import { useDispatch, useSelector } from 'react-redux'
import {
  IReleaseDateProps,
  ISearchProps,
  IStateProps,
  IStateSelectorProps,
} from './reducer.type'
import { fetchMovie, filterByYear, search } from './slices'

export const useMovieDispatch = () => {
  const { movie }: IStateSelectorProps = useSelector((state) => state)
  const dispatch = useDispatch()

  const doUpdateMovieData = async (props: IStateProps) => {
    dispatch(fetchMovie(props))
  }

  const doFilterByYear = async (props: IReleaseDateProps) => {
    dispatch(filterByYear(props))
    dispatch(search({ query: '' }))
    if (props.year === 0) {
      doFetchMovie({ page: 1 })
    } else {
      doFetchMovie({
        'release_date.gte': props.gte,
        'release_date.lte': props.lte,
      })
    }
  }

  const doSearch = async (props: ISearchProps) => {
    dispatch(search(props))
    dispatch(filterByYear({ year: 0 }))
    if (props.query) {
      doFetchSearchMovie({ query: props.query })
    } else {
      doFetchMovie({ page: 1 })
    }
    console.log(movie)
  }

  const doFetchMovie = async (props: IPayloadDiscoverMovieProps) => {
    try {
      const { results } = await MoviesRepository().fetchDiscoverMovie(props)
      dispatch(fetchMovie({ movies: results }))
    } catch (error) {
      dispatch(fetchMovie({ movies: [] }))
    }
  }

  const doFetchSearchMovie = async (props: IPayloadDiscoverMovieProps) => {
    try {
      const { results } = await MoviesRepository().fetchSearchMovie(props)
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
    doSearch,
    doFetchSearchMovie,
  }
}
