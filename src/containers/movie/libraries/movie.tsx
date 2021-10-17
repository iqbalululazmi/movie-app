import DisclosureComponent from '@components/Disclosure'
import ImageComponent from '@components/Image/'
import { CONFIG } from '@libraries/config/api'
import { IMoviesResponseProps } from '@libraries/types/movies.type'
import { IResultProps } from '@libraries/types/result.type'
import Link from 'next/link'

const MovieContainer = ({ movies }: IMoviesResponseProps) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 my-12">
        <div className="flex flex-col gap-2">
          <DisclosureComponent title="Sort">
            <div>test</div>
          </DisclosureComponent>
          <DisclosureComponent title="Filter">
            <div>filter</div>
          </DisclosureComponent>
        </div>
        <div className="col-span-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-1">
              {movies &&
                movies.map((movie: IResultProps) => (
                  <div
                    key={movie.id}
                    className=" px-1 w-full cursor-pointer md:w-1/2 lg:mb-4 lg:px-1 lg:w-1/5 hover:shadow-xl"
                  >
                    <Link href={`movie/${movie.id}`} passHref>
                      <article className="h-full overflow-hidden rounded-lg shadow-lg">
                        <div className="relative h-64">
                          <ImageComponent
                            alt={movie.title}
                            src={`${CONFIG.BASE_IMAGE_URL}${movie.poster_path}`}
                            className="rounded-sm"
                          />
                        </div>

                        <header className="flex flex-col items-start justify-between leading-tight p-1 md:p-3">
                          <p className="text-gray-500 text-sm">
                            {movie.release_date}
                          </p>
                          <h1 className="text-lg font-semibold">
                            <a className="no-underline hover:underline text-black">
                              {movie.title}
                            </a>
                          </h1>
                        </header>
                      </article>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieContainer
