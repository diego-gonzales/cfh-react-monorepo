import { Quote } from '../components/Quote'
import { Button } from '../components/shared/Button'
import { useCounter, useFetch } from '../hooks'
import { Post } from '../interfaces/post.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const {
    data: post,
    isLoading,
    hasError,
  } = useFetch<Post>(`${API_URL}/${counter}`)

  return (
    <>
      <h1>Jsonplaceholder Posts</h1>
      <Button onClick={() => increment()}>Next</Button>

      <Quote post={post} isLoading={isLoading} />

      {hasError && (
        <div className="p-2 bg-red-800 max-w-lg rounded-md">{hasError}</div>
      )}
    </>
  )
}
