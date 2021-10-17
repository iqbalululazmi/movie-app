import ButtonComponent from '@components/Button'
import ImageComponent from '@components/Image'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/outline'
import { CONFIG } from '@libraries/config/api'
import { IResultProps } from '@libraries/types/result.type'

const MovieItemDetail = ({ ...movie }: IResultProps) => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="h-32rem rounded-lg w-full relative">
        <ImageComponent
          src={`${CONFIG.BASE_IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="rounded-xl bg-blend-darken"
        />
        <div className="absolute h-full flex flex-col justify-end px-12 py-4">
          <h1 className="text-4xl text-white font-bold">{movie.title}</h1>
          <p className="text-xl text-white">{movie.release_date}</p>
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
              More Info
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieItemDetail
