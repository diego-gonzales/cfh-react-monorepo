/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'
import { type GifShorterInfo } from '../../types'

describe('Test GifItem', () => {
  test('should match snapshot', () => {
    const gif: GifShorterInfo = {
      id: '1',
      title: 'Naruto',
      image: 'https://one-punch.com/naruto.jpg',
    }

    const { container } = render(<GifItem gif={gif} />)
    expect(container).toMatchSnapshot()
  })

  test('should show the passed props correctly', () => {
    const gif: GifShorterInfo = {
      id: '2',
      title: 'Gokú',
      image: 'https://one-punch.com/goku.jpg',
    }

    render(<GifItem gif={gif} />)

    expect(screen.getByText(gif.title)).toBeTruthy()

    const imgElement = screen.getByRole('img') as HTMLImageElement

    expect(imgElement.src).toBe(gif.image)
    expect(imgElement.alt).toBe(gif.title)
  })
})
