import { useState } from 'react';

const Counter = ({ value }: { value: number }) => {
  console.log('render');
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => setCounter(value);

  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>

      <button onClick={handleSubstract}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default Counter;
