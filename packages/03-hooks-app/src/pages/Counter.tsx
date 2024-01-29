import { useState } from 'react'
import { Button } from '../components/Button'

export const Counter = () => {
  const [myState, setMyState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })

  const handleClick = () => {
    setMyState((prevState) => {
      return { ...prevState, counter1: prevState.counter1 + 1 }
    })
  }

  return (
    <>
      <h1>Counter 1: {myState.counter1}</h1>
      <h1>Counter 2: {myState.counter2}</h1>
      <h1>Counter 3: {myState.counter3}</h1>

      <Button onClick={handleClick}>+1</Button>
    </>
  )
}
