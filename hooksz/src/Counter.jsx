//Counter program
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1); //this will handle negative number
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;