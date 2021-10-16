import ButtonComponent from '@components/Button'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { IBannerProps } from './banner.types'

const BannerComponent = ({ ...props }: IBannerProps) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-96 max-w-7xl w-full relative">
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="relative h-full flex flex-col justify-end px-12 py-4">
            <h1 className="text-3xl text-white">Jumanji</h1>
            <p className="text-xl text-gray-500">genre</p>
            <div className="my-4 flex flex-row gap-2">
              <ButtonComponent color="outline" opacity={85}>
                <PlayIcon className="block h-6 w-6 mx-1" aria-hidden="true" />
                <span className="font-semibold">Trailer</span>
              </ButtonComponent>
              <ButtonComponent color="medium" opacity={85}>
                <InformationCircleIcon
                  className="block h-6 w-6 mx-1"
                  aria-hidden="true"
                />
                More Info
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerComponent
