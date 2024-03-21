import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Mohnish");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;

// import { useState, createContext } from "react";
// import ComponentB from "./ComponentB";


// function componentA() {
//   const [user, setUser] = useState("Mohnish")
//   return (
//     <div className="box">
//       <h1>ComponentA</h1>
//       <h2>{`Hello ${user}`}</h2>
//       
//       <ComponentB user={user}/>
//     </div>
//   );
// }

// export default componentA;
