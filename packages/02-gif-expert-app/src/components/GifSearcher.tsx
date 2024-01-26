import { useState } from 'react'

interface Props {
  onSearch: (searchTerm: string) => void
}

export const GifSearcher = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const valueToSearch = inputValue.trim()

    if (valueToSearch.length === 0) return

    onSearch(valueToSearch)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search gifs"
        className="input input-md input-bordered input-primary w-full"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
