import React, { useState } from "react";

function MyComponent() {
  //   let [name, setName] = useState();
  const [name, setName] = useState("Guest"); // intital it will be guest but when we click on button it will get change
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Mohnish");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toogleStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employeed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toogleStatus}>Toggle Status</button>
    </div>
  );
}

//setter function - to upadte the variable
// we will use array destructuring in two variables
// when we use setter function of statfull variable it will trigger the virtual dom
// thats why we useState full variable
// function MyComponent() {
//   //   let [name, setName] = useState();
//   const [name, setName] = useState("Guest"); // intital it will be guest but when we click on button it will get change

//   const updateName = () => {
//     setName("Mohnish");
//   };
//   // it will only update in console
//   // virtual dom won't get updated
//   // so in order to udpate v dom useState -> setter function
//   //   const updateName = () => {
//   //     name = "Mohnish";
//   //     console.log(name);
//   //   };

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <button onClick={updateName}>set Name</button>
//     </div>
//   );
// }

export default MyComponent;
