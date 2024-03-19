//React Hook = special function that allows functional components
// to use react feactures without writing class component
// useState, useEffect, useContextm useReducer, useCallback, etc

// useState = A react hook that allows the creation of stateful variable and a setter function to update its value in the virtual dom
//[name, setName]
// if we update this variable it will refect in virtual dom

//import MyComponent from "./MyComponent";
import Counter from "./Counter";


function App() {
  return (
    <>
      {/* <MyComponent /> */}
      <Counter/>
    </>
  );
}

export default App;
