// useEffect() = React Hook that tells React DO SOME CODE WHEN (Pick one):
// This component re-renders
// This component mounts
// The state of a value changes
// we can have more than one useEffect

// useEffect(function, [dependencies]);
//function -> can be a call back , anonymous function or arrow

//useEffect(() => {}) // Runs after every re-render
//useEffect(() => {}, []) //Runs only on mount
//useEffect(() => {}, [value]) //Runs on mount + when value changes

//USES (mount -> means adding component to the DOM)
// #1 event listeners
// #2 DOM manipulation
// #3 subscriptions (real time updates)
// #4 fetching data from an API
// #5 clean up when a component unmounts

import { useState, useEffect } from "react";

function MyComponent2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //it will work and window will resize .... but issue is it will add new event listener each and every time
  // bad practice
  //useEffect will solve this

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listern added");

    // to do the clean up ->unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listerner removed");
    };
  }, []);

  // window.addEventListener("resize", handleResize);
  // console.log("event listern added");

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

// function MyComponent2() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("green");

//   // example everytime the page rerender we will change the title of the document
//   // useEffect(function, [dependencies])
//   // useEffect(() => {
//   //   document.title = `Count: ${count}`;
//   // });
//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;
//   }, [count, color]);

//   //a javascript function
//   function increment() {
//     setCount((c) => c + 1);
//   }

//   function decrement() {
//     setCount((c) => c - 1);
//   }

//   function changeColor() {
//     setColor((c) => (c === "green" ? "red" : "green"));
//   }

//   return (
//     <>
//       <p style={{ color: color }}>Count: {count}</p>
//       <button onClick={increment}>Increment ➕</button>
//       <button onClick={decrement}>decrement ➖</button>
//       <br />
//       <button onClick={changeColor}>Change Color</button>
//     </>
//   );
// }

export default MyComponent2;
