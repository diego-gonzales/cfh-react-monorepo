import { useEffect, useState } from 'react'
import { Input } from './Input'
import { Message } from './Message'

export const Login = () => {
  const [myForm, setMyForm] = useState({
    email: 'Diego',
    password: 'diego@email.com',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyForm({
      ...myForm,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    // console.log('useEffect called')
  }, [])

  useEffect(() => {
    // console.log('form changed')
  }, [myForm])

  useEffect(() => {
    // console.log('email field changed')
  }, [myForm.email])

  useEffect(() => {
    // console.log('password field changed')
  }, [myForm.password])

  return (
    <>
      <form className="max-w-lg">
        <div className="mb-2">
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={myForm.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={myForm.password}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {myForm.email === 'Diego Eduardo' && <Message />}
    </>
  )
}
