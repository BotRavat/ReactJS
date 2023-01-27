import {useState} from 'react';

const App=()=>{

  let [time,setTime]=useState(new Date().toLocaleTimeString());
  
   const NewTime=()=>
  {
      setTime(new Date().toLocaleTimeString());
    
  }
       setInterval(NewTime,1000);


  return(
    <>
     
    <h1  style={{textAlign:'center'}}>{time}</h1>
      
    

    </>
  );
}

export default App;