import { API_ENDPOINT } from '@libraries/config/api'

const MoviesRepository = () => {
  const fetchNowPlaying = async (page = 1) => {
    const response = await fetch(`${API_ENDPOINT.NOW_PLAYING}&page=${page}`, {
      method: 'GET',
    })
    const data = await response.json()
    return data
  }

  const fetchDetailMovie = async (id) => {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
    })
    const data = await response.json()
    return data
  }

  const fetchTrendingMovie = async () => {
    console.log(API_ENDPOINT.TRENDING)
    const response = await fetch(API_ENDPOINT.TRENDING, {
      method: 'GET',
    })
    const data = await response.json()
    return data
  }

  const fetchPopularMovie = async () => {
    console.log(API_ENDPOINT.POPULAR)
    const response = await fetch(API_ENDPOINT.POPULAR, {
      method: 'GET',
    })
    const data = await response.json()
    return data
  }

  const fetchDiscoverMovie = async (query) => {
    console.log(API_ENDPOINT.DISCOVER)
    const response = await fetch(
      `${API_ENDPOINT.DISCOVER}&${new URLSearchParams(query)}`,
      {
        method: 'GET',
      }
    )
    const data = await response.json()
    return data
  }

  return {
    fetchNowPlaying,
    fetchDetailMovie,
    fetchTrendingMovie,
    fetchPopularMovie,
    fetchDiscoverMovie,
  }
}

export default MoviesRepository
