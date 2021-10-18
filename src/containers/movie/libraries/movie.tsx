import DisclosureComponent from '@components/Disclosure'
import ImageComponent from '@components/Image/'
import ListBox from '@components/ListBox'
import { IListBoxOptionsProps } from '@components/ListBox/libraries/list-box.type'
import { CONFIG } from '@libraries/config/api'
import { IResultProps } from '@libraries/types/result.type'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMovieDispatch } from 'src/redux/reducers/movie/dispatch'

const FilterByYear = () => {
  const { movie, doFilterByYear } = useMovieDispatch()
  const year = movie?.releaseDate?.year
  const yearValue = {
    label: year === 0 ? 'All Year' : '' + year,
    value: movie?.releaseDate?.year || 0,
  }
  const [initialValue, setInitialValue] = useState(yearValue)

  useEffect(() => {
    console.log('filter', movie)
    setInitialValue(yearValue)
    console.log('initial', initialValue)
  }, [movie])

  const options = [
    {
      label: 'All Year',
      value: 0,
    },
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
    {
      label: '2017',
      value: 2017,
    },
    {
      label: '2016',
      value: 2016,
    },
    {
      label: '2015',
      value: 2015,
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

type InputValue = {
  target: {
    value: string
  }
}

const SearchComponent = () => {
  const { movie, doSearch } = useMovieDispatch()

  const handleOnchange = (e: InputValue) => {
    const query = e.target.value
    doSearch({ query })
  }

  return (
    <input
      type="text"
      name="keyword"
      id="keyword"
      value={movie?.query}
      placeholder="Title, people, genres"
      onChange={handleOnchange}
      className="mt-1 border h-8 p-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  )
}

const MovieContainer = () => {
  const { movie } = useMovieDispatch()

  return (
    <>
      <div className="grid lg:grid-cols-6 gap-4 my-12 lg:flex lg:flex-row">
        <div className="flex lg:flex-col gap-2 z-10">
          <DisclosureComponent title="Search">
            <h1 className="text-gray-500">Search Results By</h1>
            <SearchComponent />
          </DisclosureComponent>
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
                    className=" w-full px-1 cursor-pointer sm:w-1/2 md:w-1/3 lg:mb-4 lg:px-1 lg:w-1/6 hover:shadow-xl"
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
