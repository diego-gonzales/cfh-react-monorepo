/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'
import { generateGifMock } from '../mocks/gifs.mock'

describe('Test GifItem', () => {
  test('should match snapshot', () => {
    const mockGif = generateGifMock()

    const { container } = render(<GifItem gif={mockGif} />)
    expect(container).toMatchSnapshot()
  })

  test('should show the passed props correctly', () => {
    const mockGif = generateGifMock()

    render(<GifItem gif={mockGif} />)

    expect(screen.getByText(mockGif.title)).toBeTruthy()

    const imgElement = screen.getByRole('img') as HTMLImageElement

    expect(imgElement.src).toBe(mockGif.image)
    expect(imgElement.alt).toBe(mockGif.title)
  })
})
