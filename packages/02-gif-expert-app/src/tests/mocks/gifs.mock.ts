import { type GifShorterInfo } from '../../types'

export function generateGifsMock(): GifShorterInfo[] {
  return [
    {
      id: '1',
      title: 'gif 1',
      image: 'https://localhost/gif1.gif',
    },
    {
      id: '2',
      title: 'gif 2',
      image: 'https://localhost/gif2.gif',
    },
    {
      id: '3',
      title: 'gif 3',
      image: 'https://localhost/gif3.gif',
    },
  ]
}

export function generateGifMock(): GifShorterInfo {
  return {
    id: '1',
    title: 'gif 1',
    image: 'https://localhost/gif1.gif',
  }
}

/*
export interface GiphyResponse {
  data: Gif[] // <--- this is the important part!
  pagination: Pagination
  meta: Meta
}
*/
export function generateGiphyRespone(): any {
  return {
    data: [
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
    ],
  }
}
