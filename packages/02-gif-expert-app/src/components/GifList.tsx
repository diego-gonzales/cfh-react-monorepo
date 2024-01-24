import { type GifShorterInfo } from '../types'
import { GifItem } from './GifItem'

interface Props {
  gifs: GifShorterInfo[]
}
export const GifList = ({ gifs }: Props) => {
  return (
    <>
      <ul className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </ul>
    </>
  )
}
