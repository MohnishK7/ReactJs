//render the list
//transform listcomponent to make it chnageable using props

// function List(props) {
//   const category = props.category;
//   const itemList = props.items;

//   const listItems = itemList.map((items) => (
//     <li key={items.id}>
//       {items.name}: &nbsp; <b>{items.calories}</b>
//     </li>
//   ));
//   return (
//     <>
//       <h3 className="list-category">{category}</h3>{" "}
//       <ol className="list-items">{listItems}</ol>
//     </>
//   );
// }

// export default List;

// function List(props) {
//     const itemList = props.items;
//     //   const fruits = [
//     //     { id: 1, name: "apple", calories: 95 },
//     //     { id: 2, name: "orange", calories: 62 },
//     //     { id: 3, name: "banana", calories: 105 },
//     //     { id: 4, name: "strawberry", calories: 32 },
//     //   ];

//     //lowcalories fruit
//     //   const lowCalFruits = fruits.filter((fruits) => fruits.calories < 100);

//     //const highCalFruits = fruits.filter((fruits) => fruits.calories >= 100);

//     //fruits.sort((a, b) => a.name.localeCompare(b.name));

//     const listItems = items.map((items) => (
//       <li key={items.id}>
//         {items.name}: &nbsp; <b>{items.calories}</b>
//       </li>
//     ));
//     return <ul>{listItems}</ul>;

//     //   const listItems = highCalFruits.map((highCalFruit) => (
//     //     <li key={highCalFruit.id}>
//     //       {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
//     //     </li>
//     //   ));
//     //   return <ul>{listItems}</ul>;
//   }

//   export default List;

// function List() {
//   //const fruits = ["apple", "orange", "banana", "strawberry"];
//   //const fruits = [{name: "apple", calories: 95}, {"orange"}, {"banana"}, {"strawberry"}];

//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 62 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "strawberry", calories: 32 },
//   ];

//   // the above list will give a string
//   // to get a array of list items use map

//   // we can sort as well
//   //custome sort in reverse order just change the a with b
//   fruits.sort((a, b) => a.name.localeCompare(b.name));
//   //now we will convert array of strings nto array of object
//   // to make the list item object enclose them with {} in the list

//   //use key to remove the warning
//   // unique key for each item
//   const listItems = fruits.map((fruits) => (
//     <li key={fruits.id}>
//       {fruits.name}: &nbsp; <b>{fruits.calories}</b>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;

//   //   const listItems = fruits.map((fruits) => <li>{fruits}</li>);
//   //   return <ul>{listItems}</ul>;
// }

// export default List;

//another way
// const listItems = fruits.map((fruits) => {
//     return <li>{fruits}</li>;
//   });
//   return <ul>{listItems}</ul>;
