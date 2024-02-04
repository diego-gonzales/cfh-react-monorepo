import { useCounter } from '../hooks/useCounter'
import { Button } from '../components/shared/Button'

export const CounterImproved = () => {
  const { counter, increment, decrement, reset } = useCounter()
  const factor = 10

  return (
    <>
      <h1>Counter improved: {counter}</h1>
      <Button onClick={() => decrement(factor)} disabled={counter === 0}>
        -{factor}
      </Button>
      <Button onClick={reset}>Reset</Button>
      <Button onClick={() => increment(factor)}>+{factor}</Button>
    </>
  )
}
