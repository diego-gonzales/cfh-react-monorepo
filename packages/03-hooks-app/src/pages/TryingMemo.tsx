import { memo, useState } from 'react'
import { Button } from '../components/shared/Button'
import { useCounter } from '../hooks'

// here we use the 'memo' to avoid that this component re-renders when it is no necessary
// It's only necessary when we our app is too slow (Recommended for React people)
const MyParagraph = memo(({ value }: { value: number }) => {
  console.log("I'am rendering")

  return <p>{value}</p>
})

export const TryingMemo = () => {
  const [show, setShow] = useState(false)
  const { counter, increment } = useCounter(10)

  return (
    <>
      <h1>
        Counter: <MyParagraph value={counter} />
      </h1>

      <Button onClick={() => increment()}>+1</Button>
      <Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
    </>
  )
}
