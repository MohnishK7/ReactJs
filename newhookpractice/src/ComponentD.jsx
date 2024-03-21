import { useContext } from "react";
import { UserContext } from "./ComponentA";

function componentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`bye ${user}`}</h2>
    </div>
  );
}

export default componentD;

//above code avoid prop drilling
// component A is provider and Component D is consumer

// function componentD() {
//   return (
//     <div className="box">
//       <h1>ComponentD</h1>
//       <h2>{`bye`}</h2>
//     </div>
//   );
// }

// export default componentD;
//bypassing props down in each nesting component is call props drilling
//better sol -> use context hooks
