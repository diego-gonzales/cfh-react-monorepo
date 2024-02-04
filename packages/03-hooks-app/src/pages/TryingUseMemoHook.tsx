import { useMemo, useState } from 'react'
import { Button } from '../components/shared/Button'
import { useCounter } from '../hooks'

// we create the heavy task function outside the component to avoid create a new reference in memory every time the component re-renders.
const doHeavyTask = (iterationNumber: number = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('In iteration...')
  }

  return `${iterationNumber} iterations performed`
}

export const TryingUseMemoHook = () => {
  const [show, setShow] = useState(false)
  const { counter, increment } = useCounter(200)

  const heavyTaskMemoized = useMemo(() => doHeavyTask(counter), [counter])

  return (
    <>
      <h1>Counter: {counter}</h1>

      {heavyTaskMemoized}

      <Button onClick={() => increment(5)}>+5</Button>
      <Button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
    </>
  )
}
