import HomeContainer from '@containers/home/libraries/home'
import MoviesRepository from '@libraries/repositories/movies'
import { IHomeResponseProps } from '@libraries/types/home.type'

export async function getServerSideProps() {
  const discoverMovie = await MoviesRepository().fetchPopularMovie()
  const trendingMovie = await MoviesRepository().fetchTrendingMovie()
  const popularMovie = await MoviesRepository().fetchPopularMovie()

  if (!trendingMovie) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      trending: trendingMovie.results,
      popular: popularMovie.results,
      discoverMovie: discoverMovie.results,
    },
  }
}

const Home = (props: IHomeResponseProps) => {
  return (
    <>
      <HomeContainer {...props} />
    </>
  )
}

export default Home
