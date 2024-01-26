import { render, screen } from '@testing-library/react'
import { GifList } from '../../components/GifList'
import { type GifShorterInfo } from '../../types'

describe('Test GifList', () => {
  const gifs: GifShorterInfo[] = [
    {
      id: '1',
      title: 'Naruto',
      image: 'https://one-punch.com/naruto.jpg',
    },
    {
      id: '2',
      title: 'Gokú',
      image: 'https://one-punch.com/goku.jpg',
    },
  ]

  beforeEach(() => {
    render(<GifList gifs={gifs} />)
  })

  test('should render correctly', () => {
    const list = screen.getAllByRole('listitem')
    expect(list.length).toBe(2)
  })
})
