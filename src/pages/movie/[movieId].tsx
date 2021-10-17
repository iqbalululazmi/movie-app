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
  console.log('movie detail : ', movie)
  return {
    props: {
      movie,
    },
  }
}

export default function MovieDetail({ movie }: IMovieDetailProps) {
  // const pages = [
  //   { name: 'Home', href: '/', current: false },
  //   { name: movie.title, href: '#', current: true },
  // ]

  return (
    <div className="flex justify-start items-start flex-col">
      <MovieItemDetail {...movie} />
    </div>
  )
}
