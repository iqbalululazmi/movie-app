import HomeContainer from '@containers/home/libraries/home'
import MoviesRepository from '@libraries/repositories/movies'
import { IHomeResponseProps } from '@libraries/types/home.type'

export async function getServerSideProps() {
  const trendingData = await MoviesRepository().fetchTrendingMovie()
  const popularData = await MoviesRepository().fetchPopularMovie()

  if (!trendingData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { trending: trendingData.results, popular: popularData.results },
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
