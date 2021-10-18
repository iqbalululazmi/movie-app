export type ICarouselProps = {
  datas: ICarouselImagesProps[]
  title: string
}

export type ICarouselImagesProps = {
  src: string
  id: number
  alt: string
  route: string
}
