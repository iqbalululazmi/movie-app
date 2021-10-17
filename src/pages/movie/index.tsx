import MovieContainer from '@containers/movie'
import MoviesRepository from '@libraries/repositories/movies'
import { IMoviesResponseProps } from '@libraries/types/movies.type'
import { useEffect } from 'react'
import { useMovieDispatch } from 'src/redux/reducers/movie/dispatch'

export async function getServerSideProps() {
  const { results } = await MoviesRepository().fetchNowPlaying()
  if (!results) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      movies: results,
    },
  }
}

const MoviePage = ({ movies }: IMoviesResponseProps) => {
  const { doUpdateMovieData } = useMovieDispatch()

  useEffect(() => {
    doUpdateMovieData({ movies })
  }, [])

  return (
    <>
      <MovieContainer />
    </>
  )
}

export default MoviePage
