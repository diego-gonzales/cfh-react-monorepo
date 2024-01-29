import { Input } from '../components/Input'
import { useForm } from '../hooks/useForm'

export const LoginImproved = () => {
  const { myForm, handleInputChange } = useForm({
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
    </>
  )
}
