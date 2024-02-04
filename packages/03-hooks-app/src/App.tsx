import {
  Counter,
  CounterImproved,
  FocusScreen,
  Login,
  LoginImproved,
  MultipleCustomHooks,
} from './pages'
import { TryingMemo } from './pages/TryingMemo'
import { TryingUseMemoHook } from './pages/TryingUseMemoHook'

function App() {
  return (
    <>
      <div className="mb-4">
        <Counter />
      </div>
      <hr />

      <div className="mb-4">
        <CounterImproved />
      </div>
      <hr />

      <div className="mb-2">
        <Login />
      </div>
      <hr />

      <div className="mb-2">
        <LoginImproved />
      </div>
      <hr />

      <div className="mb-2">
        <MultipleCustomHooks />
      </div>
      <hr />

      <div className="mb-2">
        <FocusScreen />
      </div>
      <hr />

      <div className="mb-2">
        <TryingMemo />
      </div>
      <hr />

      <div className="mb-2">
        <TryingUseMemoHook />
      </div>
    </>
  )
}

export default App
