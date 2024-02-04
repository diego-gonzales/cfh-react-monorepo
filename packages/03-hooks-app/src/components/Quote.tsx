import { FC } from 'react'
import { Loader } from './Loader'
import { Post } from '../interfaces/post.interface'

interface Props {
  post: Post | null
  isLoading: boolean
}

export const Quote: FC<Props> = ({ post, isLoading }) => {
  const { title, body } = post || {}

  return post ? (
    <div className="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
      <h5
        className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${
          isLoading && 'opacity-20'
        }`}
      >
        {title}
      </h5>
      <p
        className={`font-normal text-gray-700 dark:text-gray-400 ${
          isLoading && 'opacity-20'
        }`}
      >
        {body}
      </p>

      {isLoading && <Loader />}
    </div>
  ) : (
    <div>There is no posts</div>
  )
}
