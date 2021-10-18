import ImageComponent from '@components/Image'
import CardComponent from '@components/Card'
import { CONFIG } from '@libraries/config/api'
import { ICarouselImagesProps, ICarouselProps } from './carousel.type'
import Link from 'next/link'

const Carousel = ({ datas, title }: ICarouselProps) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex flex-col bg-white my-4 p-auto">
        <div className="flex pb-10  overflow-x-scroll bg-scroll scroll-bar">
          <div className="flex flex-nowrap">
            {datas &&
              datas.map((item: ICarouselImagesProps) => (
                <div key={item.id} className="inline-block px-2 cursor-pointer">
                  <Link href={item.route} passHref>
                    <div className="h-36 w-56 max-w-xs">
                      <CardComponent>
                        <div className="h-36 w-full relative">
                          <ImageComponent
                            src={`${CONFIG.BASE_IMAGE_URL}${item.src}`}
                            alt={item.alt}
                            className="rounded-xl"
                          />
                        </div>
                      </CardComponent>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
