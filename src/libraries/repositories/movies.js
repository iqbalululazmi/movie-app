import { CONFIG } from '../../config/api'

// api helpers
const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
}

function MoviesRepository() {
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

  return {
    fetchNowPlaying,
    fetchDetailMovie,
  }
}

export default MoviesRepository()
