import { render, screen } from '@testing-library/react'
import { GifList } from '../../components/GifList'
import { generateGifsMock } from '../mocks/gifs.mock'

describe('Test GifList', () => {
  const gifsMock = generateGifsMock()

  beforeEach(() => {
    render(<GifList gifs={gifsMock} />)
  })

  test('should render correctly', () => {
    const list = screen.getAllByRole('listitem')
    expect(list.length).toBe(gifsMock.length)
  })
})
