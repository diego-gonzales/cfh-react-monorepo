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
      <p data-testid="test-counter">{counter}</p>

      <button aria-label="btn-add" onClick={handleSubstract}>
        -
      </button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
      <button aria-label="btn-substract" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
