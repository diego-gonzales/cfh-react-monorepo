import { getGifs } from '../../services/giphy.service'

declare const global: any

/* eslint-disable @typescript-eslint/no-unsafe-argument */
describe('Test getGifs function', () => {
  test('should return an array of 5 elements', async () => {
    const mockGifs = [
      {
        id: '1',
        title: 'gif 1',
        images: {
          downsized_medium: {
            url: 'https://media.giphy.com/media/1/giphy.gif',
          },
        },
      },
      {
        id: '2',
        title: 'gif 2',
        images: {
          downsized_medium: {
            url: 'https://media.giphy.com/media/2/giphy.gif',
          },
        },
      },
      {
        id: '3',
        title: 'gif 3',
        images: {
          downsized_medium: {
            url: 'https://media.giphy.com/media/3/giphy.gif',
          },
        },
      },
      {
        id: '4',
        title: 'gif 4',
        images: {
          downsized_medium: {
            url: 'https://media.giphy.com/media/4/giphy.gif',
          },
        },
      },
      {
        id: '5',
        title: 'gif 5',
        images: {
          downsized_medium: {
            url: 'https://media.giphy.com/media/5/giphy.gif',
          },
        },
      },
    ]

    // mock fetch
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        data: mockGifs,
      }),
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
    expect(gifs[0].image).toBe(mockGifs[0].images.downsized_medium.url)
    expect(gifs[1]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
    })
  })
})
