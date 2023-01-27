import {useState} from 'react';

// const App = () =>{
   
//   let [headi,changeHeading]=useState();
//   let [fhead,setFname]=useState();

//   const inputEvent =(event)=>{
//      changeHeading(event.target.value);
//   }

//   const onSubmi=()=>{
//     setFname(headi);
//   }

//   return (
//     <>
//      <div>
//       <h1> Hello {fhead}</h1>
//      <input type="text" 
//         placeholder="Enter Your Name"  
//         onChange={inputEvent}
//         value={headi}
//          />
//      <button  onClick={onSubmi}>Submit</button>
//       </div>
//     </>
//   );
// }



const App=()=>{

  let [fullName,setFullName]=useState({
    fname:'',
    lname:'',
  }
  );
 


  const Submits=(event)=>{
     event.preventDefault();


  }

  const InputEvent =(event)=>{
   
    const value=event.target.value;
    const name=event.target.name;

    setFullName((preValue)=>{

       if(name==='fname')
      return{  fname:value,
        lname:preValue.lname,
      };
      
       if(name==='lname')
      return{  lname:value,
          fname:preValue.fname,
      };
    });

    


  }

  return(
    <>
      <div>
        <h1>React Form Turotial</h1>
       <h1>Hello {fullName.fname} {fullName.lname} </h1>
        <form  onSubmit={Submits}>
        <input type="text" placeholder="Enter your first Name 😊" 
          onChange={InputEvent}
          name="fname"
           value={fullName.fname} 
          />
        <input type="text" placeholder="Enter your last Name" 
           name="lname"
           onChange={InputEvent}
           value={fullName.lname}
            />
          <button type="submit"> Submit 👍</button>  

        </form>

      </div>
    </>
  );
}

export default App;