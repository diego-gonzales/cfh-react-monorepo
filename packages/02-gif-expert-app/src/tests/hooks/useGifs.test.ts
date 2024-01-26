import { renderHook, waitFor } from '@testing-library/react'
import { useGifs } from '../../hooks/useGifs'
import { getGifs } from '../../services/giphy.service'
import { generateGifsMock } from '../mocks/gifs.mock'

jest.mock('../../services/giphy.service')

describe('Test useGifs custom hook', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useGifs('')) // because the searchTerm is empty, the API is not called
    const { gifs } = result.current

    expect(gifs).toEqual([])
  })

  test('should return the initial state', async () => {
    const searchTerm = 'Dragon Ball'
    const mockGifs = generateGifsMock()

    ;(getGifs as jest.Mock).mockResolvedValue(mockGifs) // We mock the response of the API

    const { result } = renderHook(() => useGifs(searchTerm)) // because the searchTerm is not empty, the API is called

    // waitFor is a function that returns a promise and it is useful to wait for something (in this case the response of the API)
    await waitFor(() => {
      expect(result.current.gifs.length).toBeGreaterThan(0)
    })

    const { gifs } = result.current

    expect(gifs.length).toEqual(mockGifs.length)
  })
})
