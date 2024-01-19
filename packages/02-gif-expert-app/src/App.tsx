import { useEffect, useState } from 'react'
import './App.css'
import { GifSearcher } from './components/GifSearcher'
import { GifList } from './components/GifList'
import { GifShorterInfo, GiphyResponse } from './types'

const API_KEY = 'zsSARSb3Azb6j1l1MTrML5TgbYmezBvd'
const API_URL = 'https://api.giphy.com/v1/gifs/search'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [gifs, setGifs] = useState<GifShorterInfo[]>([])

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  useEffect(() => {
    fetch(`${API_URL}?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
      .then((res) => res.json())
      .then(({ data }: GiphyResponse) => {
        const newData = data.map((gif) => {
          return {
            id: gif.id,
            title: gif.title,
            image: gif.images.preview_webp.url,
          }
        })
        setGifs(newData)
      })
  }, [searchTerm])

  return (
    <>
      <header className="prose">
        <h1>Gifts App</h1>
      </header>

      <main className="my-4">
        <GifSearcher onSearch={handleSearch} />

        <div className="my-4">
          {searchTerm && (
            <p>
              Searching for <kbd className="kbd">{searchTerm}</kbd>
            </p>
          )}
        </div>

        <div>
          {gifs.length > 0 ? (
            <GifList gifs={gifs} />
          ) : (
            <p>The list of gifs is empty</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
