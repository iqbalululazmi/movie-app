import ButtonComponent from '@components/Button'
import ImageComponent from '@components/Image'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/outline'
import { IBannerProps } from './banner.types'
import Link from 'next/link'

const BannerComponent = ({ ...props }: IBannerProps) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-96 w-full relative">
          <ImageComponent {...props} className="rounded-xl" />
          <div className="absolute h-full flex flex-col justify-end px-12 py-4">
            <h1 className="text-4xl text-white font-bold">{props.title}</h1>
            <p className="text-xl text-white">{props.date}</p>
            <div className="my-4 flex flex-row gap-2">
              <ButtonComponent color="danger" opacity={85}>
                <PlayIcon className="block h-6 w-6 mx-1" aria-hidden="true" />
                <span className="font-semibold">Watch Now</span>
              </ButtonComponent>
              <ButtonComponent color="medium" opacity={85}>
                <InformationCircleIcon
                  className="block h-6 w-6 mx-1"
                  aria-hidden="true"
                />
                <Link href={props.route} passHref>
                  More Info
                </Link>
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerComponent
