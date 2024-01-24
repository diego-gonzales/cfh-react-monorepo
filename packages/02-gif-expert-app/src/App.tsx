import { useEffect, useState } from 'react'
import './App.css'
import { GifSearcher } from './components/GifSearcher'
import { GifList } from './components/GifList'
import { GifShorterInfo } from './types'
import { getGifs } from './services/giphy.service'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [gifs, setGifs] = useState<GifShorterInfo[]>([])

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  useEffect(() => {
    getGifs(searchTerm)
      .then((resp) => setGifs(resp))
      .catch(console.error)
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
