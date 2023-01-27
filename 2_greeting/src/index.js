import React from 'react';
import ReactDOM from 'react-dom';


const time=new Date().getHours();

let colo='red';
let wish='afternoon';
 if(time<12 && time>=1)
    {
      colo="red";
      wish="Good Morning";
    }
  else
   if(time>=12 && time<19)
    {
      colo="yellow";
      wish="Good Afternoon";
    }  
     else 
    {
      colo="black";
      wish="Good Night";
    }
  

ReactDOM.render (
  <>
       <h1 > Hello, <span style={{ color:colo}}>{`${wish}`}</span></h1>
  </>
  ,document.getElementById('root')
);