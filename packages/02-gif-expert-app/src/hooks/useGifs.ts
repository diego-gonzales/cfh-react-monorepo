import { useEffect, useState } from 'react'
import { type GifShorterInfo } from '../types'
import { getGifs } from '../services/giphy.service'

export function useGifs(searchTerm: string = '') {
  const [gifs, setGifs] = useState<GifShorterInfo[]>([])

  useEffect(() => {
    getGifs(searchTerm)
      .then((resp) => {
        setGifs(resp)
      })
      .catch(console.error)
  }, [searchTerm])

  return { gifs }
}
