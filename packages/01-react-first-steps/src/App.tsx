import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';

function App() {
  return (
    <>
      {/* <HelloWorld
        title="Hello World"
        counter={10}
      /> */}
      <Counter value={10} />
    </>
  );
}

export default App;
