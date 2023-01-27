import { useContext } from "react";
import { FName, LName } from "./App";

const CompC = () => {
  return (
    <>
      <FName.Consumer>
        {(fname) => {
          return (
            <LName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My Name is {fname} {lname}
                  </h1>
                );
              }}
            </LName.Consumer>
          );
        }}
      </FName.Consumer>
    </>
  );
};

// const CompC=()=>{

//     const fname=useContext(FName);
//     const lname=useContext(LName);

//     return <h1> My Name is {fname} {lname}</h1>
// }

export default CompC;
