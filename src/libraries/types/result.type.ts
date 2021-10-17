export type IResultsProps = {
  results: IResultProps[]
}

export type IResultProps = {
  overview: string
  release_date: string
  adult: boolean
  backdrop_path: string
  vote_count: number
  genre_ids: number[]
  vote_average: number
  original_language: string
  original_title: string
  poster_path: string
  title: string
  video: boolean
  id: number
  popularity: number
  media_type: string
}
