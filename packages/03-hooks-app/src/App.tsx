import { Counter } from './components/Counter'
import { CounterImproved } from './components/CounterImproved'
import { Login } from './components/Login'

function App() {
  return (
    <>
      <div className="mb-4">
        <Counter />
      </div>

      <div className="mb-4">
        <CounterImproved />
      </div>

      <div>
        <Login />
      </div>
    </>
  )
}

export default App
