// update function = A function passed as an argument to setState()usually
// ex. setYear(arrow function) like setYear(y => y + 1) prev we do setYear(year + 1)
// Allow for safe update based on the previous state
// used with multiple state updates and asynchronous functions
// Good practice to use update function

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    // below 3 setCount won't work
    //uses the CURRENT state to calculate the NEXT state
    // set function do not trigger an update
    // React batches together state update for performance resasons.
    // NEXR state becomes the CURRENT state after an update.

    // i have taken first variable of each state name
    // Takes the PENDING state to calculate NEXT state
    // React Puts your updater function in a queue(waiting in line)
    // During the next render, it will call them in the same order.
    setCount((c) => c + 1); 
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    //setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1 we are just setting count 3 similar times
  };
  const decrement = () => {
    setCount(count - 1); //this will handle negative number
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

//Counter program
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     if (count > 0) setCount(count - 1); //this will handle negative number
//   };
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="counter-container">
//       <p className="count-display">{count}</p>
//       <button className="counter-button" onClick={reset}>
//         Reset
//       </button>
//       <button className="counter-button" onClick={increment}>
//         Increment
//       </button>
//       <button className="counter-button" onClick={decrement}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default Counter;
