import BannerComponent from '@components/Banner'
import { IBannerProps } from '@components/Banner/libraries/banner.types'
import Carousel from '@components/Carousel'
import { ICarouselImagesProps } from '@components/Carousel/libraries/carousel.type'
import { CONFIG } from '@libraries/config/api'
import { IHomeResponseProps } from '@libraries/types/home.type'
import { IResultProps } from '@libraries/types/result.type'
import { useEffect, useState } from 'react'

const HomeContainer = ({
  trending,
  popular,
  discoverMovie,
}: IHomeResponseProps) => {
  const [carouselTrending, setCarouselTrending] = useState<
    ICarouselImagesProps[]
  >([])
  const [carouselPopular, setCarouselPopular] = useState<
    ICarouselImagesProps[]
  >([])
  const [bannerDiscover, setBannerDiscover] = useState<IBannerProps>({
    src: '',
    alt: '',
    title: '',
    date: '',
    route: '',
  })

  useEffect(() => {
    handleBannerDiscover()
    handleCarousel()
  }, [])

  const handleBannerDiscover = () => {
    if (discoverMovie && discoverMovie.length > 0) {
      const random = Math.floor(Math.random() * discoverMovie.length)
      const selectedBanner = discoverMovie[random]
      setBannerDiscover({
        alt: selectedBanner.title,
        src: CONFIG.BASE_IMAGE_URL + selectedBanner.backdrop_path,
        date: selectedBanner.release_date,
        title: selectedBanner.title,
        route: `/movie/${selectedBanner.id}`,
      })
    }
  }

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
        {bannerDiscover && <BannerComponent {...bannerDiscover} />}
      </div>
      <Carousel datas={carouselTrending} title="Trending Now" />
      <Carousel datas={carouselPopular} title="Popular" />
    </>
  )
}

export default HomeContainer
