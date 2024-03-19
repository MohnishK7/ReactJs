//click event = an interaction when a user click on a specific element
// we can respond to click by passing a callback to the onClick event handler
import Button from "./Button";

function App() {
  return (
    <>
      <Button />
    </>
  );
}

export default App;

//render the list in react

// import List from "./List";

// function App() {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 62 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "strawberry", calories: 32 },
//   ];

//   const vegeies = [
//     { id: 5, name: "tomato", calories: 95 },
//     { id: 6, name: "potato", calories: 110 },
//     { id: 7, name: "ladyfinger", calories: 105 },
//     { id: 8, name: "egg plant", calories: 32 },
//   ];

//   return (
//     <>
//       {/* we can add conditional rendering */}
//       {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
//       {vegeies.length > 0 ? (
//         <List items={vegeies} category="Vegetables" />
//       ) : null}
//       {/* <List items={vegeies} category="Vegetables" /> */}
//     </>
//   );
// }

// export default App;

//conditional rendering = allows you to contro what gets rendered
// in your application based on certain condition(show, hide or change component)

// import UserGreeting from "./UserGreeting";

// function App() {
//   return (
//     <>
//       <UserGreeting isLoggedIn={true} />
//       {/* <UserGreeting isLoggedIn={false} username="Kumar" /> */}
//     </>
//   );
// }

// export default App;
