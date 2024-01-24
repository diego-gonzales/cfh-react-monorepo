import { type GifShorterInfo } from '../types'

interface Props {
  gif: GifShorterInfo
}

export const GifItem = ({ gif }: Props) => {
  return (
    <li>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={gif.image} alt={gif.title} className="h-52 object-cover" />
        </figure>
        <div className="card-body">
          <small className="text-center">{gif.title}</small>
        </div>
      </div>
    </li>
  )
}
