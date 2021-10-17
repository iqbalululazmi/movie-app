import { ICardProps } from './card.type'

const CardComponent = ({ children }: ICardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {children}
    </article>
  )
}

export default CardComponent
