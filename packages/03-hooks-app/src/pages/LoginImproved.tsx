import { Button } from '../components/shared/Button'
import { Input } from '../components/shared/Input'
import { useForm } from '../hooks/useForm'

export const LoginImproved = () => {
  const { myForm, handleInputChange, handleReset } = useForm({
    username: '',
    email: '',
    password: '',
  })

  return (
    <>
      <h3>Login improved</h3>
      <form className="max-w-lg">
        <div className="mb-2">
          <Input
            name="username"
            placeholder="Username"
            type="text"
            value={myForm.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-2">
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={myForm.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-2">
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={myForm.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Button type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </>
  )
}
