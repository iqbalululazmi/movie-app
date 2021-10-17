import DisclosureComponent from '@components/Disclosure'
import ImageComponent from '@components/Image/'
import ListBox from '@components/ListBox'
import { IListBoxOptionsProps } from '@components/ListBox/libraries/list-box.type'
import { CONFIG } from '@libraries/config/api'
import { IResultProps } from '@libraries/types/result.type'
import Link from 'next/link'
import { useMovieDispatch } from 'src/redux/reducers/movie/dispatch'

const FilterByYear = () => {
  const { movie, doFilterByYear } = useMovieDispatch()
  const initialValue = {
    label: '' + movie?.releaseDate?.year || '2021',
    value: movie?.releaseDate?.year || 2021,
  }

  const options = [
    {
      label: '2021',
      value: 2021,
    },
    {
      label: '2020',
      value: 2020,
    },
    {
      label: '2019',
      value: 2019,
    },
    {
      label: '2018',
      value: 2018,
    },
  ]

  const calback = (e: IListBoxOptionsProps) => {
    doFilterByYear({
      year: e.value,
      gte: `${e.value}-01-01`,
      lte: `${e.value}-12-31`,
    })
  }

  return (
    <ListBox options={options} callback={calback} initialValue={initialValue} />
  )
}

const MovieContainer = () => {
  const { movie } = useMovieDispatch()

  return (
    <>
      <div className="grid lg:grid-cols-6 gap-4 my-12 lg:flex lg:flex-row">
        <div className="flex lg:flex-col gap-2 z-10">
          {/* <DisclosureComponent title="Sort">
            <div>test</div>
          </DisclosureComponent> */}
          <DisclosureComponent title="Filter">
            <h1 className="text-gray-500">Release Year</h1>
            <FilterByYear />
          </DisclosureComponent>
        </div>
        <div className="col-span-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-1">
              {movie?.movies &&
                movie.movies.map((movie: IResultProps) => (
                  <div
                    key={movie.id}
                    className=" w-full px-1 cursor-pointer sm:w-1/2 md:w-1/3 lg:mb-4 lg:px-1 lg:w-1/5 hover:shadow-xl"
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
