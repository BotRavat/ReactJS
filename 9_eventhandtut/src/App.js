import {useState} from 'react';


const App = () =>
{ 
    
   let [colo,changeColor]= useState('red');
   let [name,changeText]= useState('Click Me');
   let [txt,textChange]= useState('Welcome toEvent Handling Tutorial');

  const BgChange=()=>{
    console.log("clicked");
    colo='pink';
     changeColor(colo);
     changeText('Clicked');
    
     textChange("You just clicked");
    
  }

  const TextChange = () =>{

    textChange("You just double clicked");
    changeText('Double Clicked');
    changeColor('orange');
  }

  const MEnter =()=>{
       textChange("You just Enter Mouse Cursor to the Button");
       changeColor('yellow');
  }
 
  const MLeave =()=>{
       textChange("Welcome to Event Handling Tutorial");
       changeColor('purple');
       changeText('Click Me');

       
  }
 

  return (
  <> <div  style={{ textAlign:'center', backgroundColor:colo}}>
    <h1> {txt}</h1>
    <button onClick={BgChange} onDoubleClick={TextChange}  onMouseEnter={MEnter}  onMouseLeave={MLeave}>{name}</button>
    

    </div>
   
  </>
  );
}

export default App;