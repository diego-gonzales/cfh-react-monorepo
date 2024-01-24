import { type GifShorterInfo, type GiphyResponse } from '../types'

const API_KEY = 'zsSARSb3Azb6j1l1MTrML5TgbYmezBvd'
const API_URL = 'https://api.giphy.com/v1/gifs/search'

export const getGifs = async (
  searchTerm: string
): Promise<GifShorterInfo[]> => {
  const response = await fetch(
    `${API_URL}?api_key=${API_KEY}&q=${searchTerm}&limit=10`
  )

  if (!response.ok) {
    throw new Error(`Error fetching gifs (${response.statusText})`)
  }

  const info = (await response.json()) as GiphyResponse

  const gifs = info.data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      image: gif.images.downsized_medium.url,
    }
  })

  return gifs
}
