//click event = an interaction when a user click on a specific element
// we can respond to click by passing a callback to the onClick event handler

//event parameter
//e -> event argument -> its ana object that describe the event occured as e
function Button() {
  const handleClick = (e) => {
    if (e.target.textContent === "Click 😀") {
      e.target.textContent = "OUCH!😑";
    } else {
      e.target.textContent = "Click 😀";
    }
  };

  return <button onClick={handleClick}>Click 😀</button>;
}

// function Button() {
//   const handleClick = (e) => (e.target.textContent = "OUCH!😑");

//   return <button onClick={(e) => handleClick(e)}>Click 😀</button>;
// }

// function Button() {
//   const handleClick = (e) => console.log(e);

//   return <button onClick={(e) => handleClick(e)}>Click 😀</button>;
// }

/*within the function we can write some condition*/
// const handleClick = () => {
//   return console.log("OUCHHH");
// };

// function Button() {
//   let cnt = 0;
//   const handleClick = (name) => {
//     if (cnt < 3) {
//       cnt++;
//       console.log(`${name} you clicked me ${cnt} times`);
//     } else {
//       console.log(`${name} STOP CLICKING ME !!`);
//     }
//   };

//   return <button onClick={() => handleClick("Mohnish")}>Click 😀</button>;
// }

// below is how we send argument to a function
// const handleClick2 = (name) => {
//   console.log(`${name} stop clicking me`);
// };

// it will invoke right a way
// below is how we send argument to a function
// if we want on at time of onclick -> wrap in arrow function
// function Button() {
//   return <button onClick={() => handleClick2("Mohnish")}>Click me</button>;
// }

export default Button;
