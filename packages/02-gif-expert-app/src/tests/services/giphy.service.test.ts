import { getGifs } from '../../services/giphy.service'
import { generateGiphyRespone } from '../mocks/gifs.mock'

declare const global: any

/* eslint-disable @typescript-eslint/no-unsafe-argument */
describe('Test getGifs function', () => {
  test('should return an array of 5 elements', async () => {
    const mockGiphyResponse = generateGiphyRespone()

    // mock fetch
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockGiphyResponse),
    } as any)

    // global.fetch = jest.fn().mockResolvedValue({
    //   ok: true,
    //   json: jest.fn().mockResolvedValue({
    //     data: mockGifs,
    //   }),
    // })

    // call getGifs function
    const gifs = await getGifs('test')

    // expect
    expect(gifs).toHaveLength(5)
    expect(gifs[0].image).toBe(
      mockGiphyResponse.data[0].images.downsized_medium.url
    )
    expect(gifs[1]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
    })
  })
})
