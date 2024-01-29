import { useState } from 'react'

export function useForm<T>(initialForm: T) {
  const [myForm, setMyForm] = useState(initialForm)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(myForm instanceof Object)) return

    setMyForm({
      ...myForm,
      [event.target.name]: event.target.value,
    })
  }

  const handleReset = () => {
    setMyForm(initialForm)
  }

  return { myForm, handleInputChange, handleReset }
}
