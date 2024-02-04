import {
  Counter,
  CounterImproved,
  FocusScreen,
  Login,
  LoginImproved,
  MultipleCustomHooks,
} from './pages'

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

      <div className="mb-2">
        <FocusScreen />
      </div>
    </>
  )
}

export default App
