import { Counter } from './pages/Counter'
import { CounterImproved } from './pages/CounterImproved'
import { Login } from './pages/Login'
import { LoginImproved } from './pages/LoginImproved'
import { MultipleCustomHooks } from './pages/MultipleCustomHooks'

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

      <div className="mb-2">
        <LoginImproved />
      </div>

      <div className="mb-2">
        <MultipleCustomHooks />
      </div>
    </>
  )
}

export default App
