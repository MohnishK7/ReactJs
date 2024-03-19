//Update array in state
import { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState(["apple", "banana", "orange"]);

  function handleFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood((food) => [...food, newFood]);
  }

  function handleRemoveFood(index) {
    setFood(food.filter((_, i) => i != index));
  }

  return (
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {food.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="enter food name"></input>
        <button onClick={handleFood}>Add Food</button>
      </div>
    </>
  );
}

// //update the object in state

// import { useState } from "react";

// function MyComponent() {
//   const [car, setCar] = useState({
//     year: 2024,
//     mark: "Buggarti",
//     model: "veron",
//   });

//   function handleYearChange(e) {
//     //spread all the property of the car and add the year
//     //... spread operator
//     // combine with updater function -> it will allow safe update
//     setCar((c) => ({ ...c, year: e.target.value }));
//     //setCar({ ...car, year: e.target.value });
//   }
//   function handlemarkChange(e) {
//     setCar({ ...car, mark: e.target.value });
//   }
//   function handlemodelChange(e) {
//     setCar({ ...car, model: e.target.value });
//   }

//   return (
//     <>
//       <p>
//         Your favorite car is : {car.year} {car.mark} {car.model}
//       </p>
//       <input type="number" value={car.year} onChange={handleYearChange}></input>
//       <input type="text" value={car.mark} onChange={handlemarkChange}></input>
//       <input type="text" value={car.model} onChange={handlemodelChange}></input>
//     </>
//   );
// }

// import React, { useState } from "react";

// function MyComponent() {
//   //   let [name, setName] = useState();
//   const [name, setName] = useState("Guest"); // intital it will be guest but when we click on button it will get change
//   const [age, setAge] = useState(0);
//   const [isEmployed, setIsEmployed] = useState(false);

//   const updateName = () => {
//     setName("Mohnish");
//   };

//   const incrementAge = () => {
//     setAge(age + 1);
//   };

//   const toogleStatus = () => {
//     setIsEmployed(!isEmployed);
//   };

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <button onClick={updateName}>set Name</button>

//       <p>Age: {age}</p>
//       <button onClick={incrementAge}>Increment Age</button>

//       <p>Is Employeed: {isEmployed ? "Yes" : "No"}</p>
//       <button onClick={toogleStatus}>Toggle Status</button>
//     </div>
//   );
// }

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
