import MoviesRepository from '@libraries/repositories/movies'
import { useDispatch, useSelector } from 'react-redux'
import { IStateProps, IStateSelectorProps } from './reducer.type'
import { fetchMovie } from './slices'

export const useMovieDispatch = () => {
  const { movie }: IStateSelectorProps = useSelector((state) => state)
  const dispatch = useDispatch()

  const doUpdateMovieData = async (props: IStateProps) => {
    dispatch(fetchMovie(props))
  }

  const doFetchMovie = async () => {
    try {
      const { results } = await MoviesRepository().fetchNowPlaying()
      console.log(results)

      dispatch(fetchMovie(results))
    } catch (error) {
      dispatch(fetchMovie([]))
    }
  }

  return {
    movie,
    doFetchMovie,
    doUpdateMovieData,
  }
}
