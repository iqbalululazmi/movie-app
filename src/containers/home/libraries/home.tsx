import BannerComponent from '@components/Banner'
import Carousel from '@components/Carousel'
import { ICarouselImagesProps } from '@components/Carousel/libraries/carousel.type'
import { IHomeResponseProps } from '@libraries/types/home.type'
import { IResultProps } from '@libraries/types/result.type'
import { useEffect, useState } from 'react'

export const discover = {
  src: 'https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,032541,01b4e4)/jXDz3w8blsaPvw2OUA0i8zPIvHg.jpg',
  alt: 'Image Discover',
}

const HomeContainer = ({ trending, popular }: IHomeResponseProps) => {
  const [carouselTrending, setCarouselTrending] = useState<
    ICarouselImagesProps[]
  >([])
  const [carouselPopular, setCarouselPopular] = useState<
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
      }

      return newObj
    })
  }

  const handleCarousel = () => {
    if (trending && trending.length > 0) {
      const data = carouselMap(trending)
      setCarouselTrending(data)
    }

    if (popular && popular.length > 0) {
      const data = carouselMap(popular)
      setCarouselPopular(data)
    }
  }

  return (
    <>
      <div className="my-4">
        <BannerComponent {...discover} />
      </div>
      <Carousel datas={carouselTrending} title="Trending Now" />
      <Carousel datas={carouselPopular} title="Popular" />
    </>
  )
}

export default HomeContainer
