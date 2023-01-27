import React from 'react';
import Heading from './Heading';
import Dat from './Dat';
import Time from './Time';
 
const tim=new Date().getHours();

let colo='red';
let wish='afternoon';
 if(tim<12 && tim>=1)
    {
      colo="red";
      wish="Good Morning";
    }
  else
   if(tim>=12 && tim<19)
    {
      colo="green";
      wish="Good Afternoon";
    }  
     else 
    {
      colo="black";
      wish="Good Night";
    }
function App(){
  return (
  <>
   <Heading/>
   <h1 > Hello, <span style={{ color:colo}}>{`${wish}`}</span></h1>
   <Dat/>
   <Time/> 
  </>
  );
}

export default App;