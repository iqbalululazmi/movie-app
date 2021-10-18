import MovieItemDetail from '@containers/movie-detail'
import {
  IMovieDetailContext,
  IMovieDetailProps,
} from '@libraries/types/movies.type'
import MoviesRepository from '../../libraries/repositories/movies'

export async function getServerSideProps(context: IMovieDetailContext) {
  const {
    params: { movieId },
  } = context
  const movie = await MoviesRepository().fetchDetailMovie(movieId)
  const similarMovie = await MoviesRepository().fetchSimilarMovie(movieId)
  console.log(similarMovie)
  return {
    props: {
      movie,
      similarMovie: similarMovie.results,
    },
  }
}

export default function MovieDetail({
  movie,
  similarMovie,
}: IMovieDetailProps) {
  return (
    <div className="flex justify-start items-start flex-col">
      <MovieItemDetail movie={movie} similarMovie={similarMovie} />
    </div>
  )
}
