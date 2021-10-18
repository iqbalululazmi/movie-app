import ButtonComponent from '@components/Button'
import Carousel from '@components/Carousel'
import { ICarouselImagesProps } from '@components/Carousel/libraries/carousel.type'
import ImageComponent from '@components/Image'
import {
  BookmarkIcon,
  HeartIcon,
  PlayIcon,
  StarIcon,
  ViewListIcon,
} from '@heroicons/react/outline'
import { CONFIG } from '@libraries/config/api'
import { IMovieDetailProps } from '@libraries/types/movies.type'
import { IResultProps } from '@libraries/types/result.type'
import { useEffect, useState } from 'react'

const MovieItemDetail = ({ movie, similarMovie }: IMovieDetailProps) => {
  console.log(similarMovie)
  const genres = movie.genres.map((genre) => genre.name).join(', ')
  const [similarMovieCarousel, setSimilarMovieCarousel] = useState<
    ICarouselImagesProps[]
  >([])

  useEffect(() => {
    handleCarousel()
  }, [])

  const carouselMap = (data: IResultProps[]) => {
    return data.map((item) => {
      const newObj: ICarouselImagesProps = {
        src: item.poster_path,
        alt: item.title,
        id: item.id,
        route: `/movie/${item.id}`,
      }
      return newObj
    })
  }

  const handleCarousel = () => {
    if (similarMovie && similarMovie.length > 0) {
      const data = carouselMap(similarMovie)
      setSimilarMovieCarousel(data)
    }
  }

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="h-36rem rounded-lg w-full relative">
        <ImageComponent
          src={`${CONFIG.BASE_IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="rounded-xl bg-blend-darken"
        />
        <div className="bg-red-900 h-36rem z-10 absolute w-full opacity-25"></div>
        <div className="absolute h-full flex flex-row items-center justify-center p-8 gap-3 z-20">
          <div className="flex-none w-72 h-full relative rounded-xl">
            <ImageComponent
              src={`${CONFIG.BASE_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="rounded-xl"
            />
          </div>
          <div className="flex-auto h-full flex flex-col justify-start px-12 py-4 z-20">
            <h1 className="text-4xl text-white font-bold">
              {movie.title} ( {new Date(movie.release_date).getFullYear()} )
            </h1>
            <p className="text-xl text-white">{genres}</p>
            <div className="flex flex-row gap-2 my-4">
              <div className="circle flex flex-col justify-center bg-red-600">
                <HeartIcon className="block h-6 w-6" />
              </div>
              <div className="circle flex flex-col justify-center bg-red-600">
                <StarIcon className="block h-6 w-6" />
              </div>
              <div className="circle flex flex-col justify-center bg-red-600">
                <BookmarkIcon className="block h-6 w-6" />
              </div>
              <div className="circle flex flex-col justify-center bg-red-600">
                <ViewListIcon className="block h-6 w-6" />
              </div>
            </div>
            <div className="my-2">
              <h1 className="font-bold text-white text-2xl">Overview</h1>
              <p className="text-lg text-gray-100">{movie.overview}</p>
            </div>
            <div className="my-4 flex flex-row gap-2">
              <ButtonComponent color="danger" opacity={85}>
                <PlayIcon className="block h-6 w-6 mx-1" aria-hidden="true" />
                <span className="font-semibold">Watch Now</span>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <Carousel datas={similarMovieCarousel} title="Similar Movie" />
      </div>
    </div>
  )
}

export default MovieItemDetail
