export const CONFIG = {
  KEY: 'd212dc1bfc2d8009f736f68f2e71938f',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
  DEFAULT_LANGUAGE: 'en-us',
}

export const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  TRENDING: `${CONFIG.BASE_URL}trending/movie/week?api_key=${CONFIG.KEY}&page=1`,
  POPULAR: `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&page=1`,
  DISCOVER: `${CONFIG.BASE_URL}discover/movie?api_key=${CONFIG.KEY}&page=1&language=${CONFIG.DEFAULT_LANGUAGE}`,
  SEARCH: `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&page=1&language=${CONFIG.DEFAULT_LANGUAGE}`,
}
