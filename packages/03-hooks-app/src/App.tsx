import { Counter } from './components/Counter'
import { CounterImproved } from './components/CounterImproved'

function App() {
  return (
    <>
      <div className="mb-4">
        <Counter />
      </div>

      <div>
        <CounterImproved />
      </div>
    </>
  )
}

export default App
