import { Counter } from './pages/Counter'
import { CounterImproved } from './pages/CounterImproved'
import { Login } from './pages/Login'
import { LoginImproved } from './pages/LoginImproved'

function App() {
  return (
    <>
      <div className="mb-4">
        <Counter />
      </div>

      <div className="mb-4">
        <CounterImproved />
      </div>

      <div className="mb-2">
        <Login />
      </div>

      <div>
        <LoginImproved />
      </div>
    </>
  )
}

export default App
