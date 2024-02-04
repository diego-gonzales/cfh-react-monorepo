import { useFetch } from '../hooks/useFetch'
import { Post } from '../interfaces/post.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const MultipleCustomHooks = () => {
  const { data, isLoading } = useFetch<Post>(`${API_URL}/1`)

  const { title, body } = data || {}

  return (
    <>
      <h1>Jsonplaceholder Posts</h1>

      {isLoading ? (
        <div className="bg-blue-400 max-w-lg p-2 rounded-md">Loading...</div>
      ) : (
        <blockquote className="text-right max-w-lg">
          <p>{title}</p>
          <footer className="opacity-50">{body}</footer>
        </blockquote>
      )}
    </>
  )
}
