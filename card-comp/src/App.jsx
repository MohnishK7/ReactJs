import Card from "./Card1";
// below we dont use any props
//props = read-only properties that are shared between components
// a parent component can send data to a child component
//<component key=value/>

//propTypws = a mechanism that ensures that the passed value
// is of correct datatype.
// age : propType.number


//and we have create the reusable component



function App() {
  return (
    <>
      <Card
        name="Albert"
        title="I am a theoretical physicist"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvRFkGvTCnWKTp010CB419AFy5SVRVQt9KfYtEcSC3Q&s"
      />
      <Card
        name="Newton"
        title="I create Calculs"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Unknown_man%2C_formerly_known_as_Sir_Isaac_Newton_from_NPG.jpg/200px-Unknown_man%2C_formerly_known_as_Sir_Isaac_Newton_from_NPG.jpg"
      />
      <Card
        name="Max Plank"
        title="Planck's quantum"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_%281858-1947%29.jpg/200px-Max_Planck_%281858-1947%29.jpg"
      />
    </>
  );
}

export default App;
