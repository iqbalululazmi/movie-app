import MovieContainer from '@containers/movie'
import MoviesRepository from '@libraries/repositories/movies'
import { IMovieResponseProps } from '@libraries/types/movies.type'

export async function getServerSideProps() {
  const { results } = await MoviesRepository().fetchNowPlaying()
  console.log(results)
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

const MoviePage = ({ movies }: IMovieResponseProps) => {
  return (
    <>
      <MovieContainer movies={movies} />
    </>
  )
}

export default MoviePage
