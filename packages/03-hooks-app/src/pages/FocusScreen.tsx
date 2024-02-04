import { useRef } from 'react'
import { Button } from '../components/shared/Button'
import { Input } from '../components/shared/Input'

// In this component we are trying the useRef() hook
export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    console.log(inputRef)
    inputRef.current?.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <form className="max-w-lg">
        <Input ref={inputRef} />
        <Button onClick={handleClick} type="button">
          Set Focus
        </Button>
      </form>
    </>
  )
}
