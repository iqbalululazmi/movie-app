import Image from 'next/image'
import { IImageProps } from './image.type'

const ImageComponent = ({ ...props }: IImageProps) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      layout="fill"
      objectFit="cover"
      className={props.className}
    />
  )
}

export default ImageComponent
