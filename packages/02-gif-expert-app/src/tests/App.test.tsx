import { render, screen } from '@testing-library/react'
import App from '../App'
import { useGifs } from '../hooks/useGifs'
import { generateGifsMock } from './mocks/gifs.mock'

jest.mock('../hooks/useGifs')

describe('Test App', () => {
  test('should render correctly', () => {
    ;(useGifs as jest.Mock).mockReturnValue({ gifs: [] })

    render(<App />)

    expect(screen.getByText('The list of gifs is empty')).toBeTruthy()
  })

  test('should show a list of gifs when the useGifs() custom hook returns a list of gifs', () => {
    const gifsMock = generateGifsMock()

    ;(useGifs as jest.Mock).mockReturnValue({ gifs: gifsMock })

    render(<App />)

    const list = screen.getAllByRole('listitem')

    expect(list.length).toBe(gifsMock.length)
  })
})
