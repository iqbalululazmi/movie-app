import BannerComponent from '@components/Banner'

export const discover = {
  src: 'https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,032541,01b4e4)/jXDz3w8blsaPvw2OUA0i8zPIvHg.jpg',
  alt: 'Image Discover',
}

const HomeContainer = () => {
  return (
    <>
      <div className="my-4">
        <BannerComponent {...discover} />
      </div>
      <div>
        <h1>Now Playing</h1>
      </div>
    </>
  )
}

export default HomeContainer
