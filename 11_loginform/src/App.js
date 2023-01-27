import {useState} from 'react';

const App =()=>{

   const[fullDetails,setFullDetails]=useState({
      fname:'',
      lname:'',
      phone:'',
      email:'',
      
   })


  const InputEvent =(event)=>{
    const{value,name}=event.target;


    setFullDetails((preValue)=>   //preValue 
    {
      
  //   if(name==='fname')
  //   return { 
  //      fname:value,
  //      lname:preValue.lname,
  //      phone:preValue.phone,
  //      email:preValue.email,
  //   };
  //   else if(name==='lname')
  //   return {
  //     fname:preValue.fname,
  //     lname:value,
  //     phone:preValue.phone,
  //     email:preValue.email,
  //  };
  //   else if(name==='phone')
  //   return {
  //     fname:preValue.fname,
  //     lname:preValue.lname,
  //     phone:value,
  //     email:preValue.email,
  //     };
  //   else if(name==='email')
  //   return {
  //     fname:preValue.fname,
  //     lname:preValue.lname,
  //     phone:preValue.phone,
  //     email:value,
  //  };

  //above number of lines of code can be reduced using spread (...) operator 

  return {
        ...preValue,
        [name]:value,
  };

  
  
  });
  
}

  const Submit=()=>{
   alert('Submitted');
  }

  return(
    <>
      <div>
       <h1> Login Form using React</h1>
       <p>First Name : {fullDetails.fname}</p>
       <p>Last Name : {fullDetails.lname}</p>
       <p>Email : {fullDetails.email}</p>
       <p>Number : {fullDetails.phone}</p>
       <form onSubmit={Submit}>
       
        <input type="text" 
        placeholder="Enter Your First Name" 
        name="fname" 
        onChange={InputEvent}
        value={fullDetails.fname} 
        />
        <br/>
        <br/>
        <input type="text" 
        placeholder="Enter Your Last Name" 
        name="lname" 
        onChange={InputEvent}
        value={fullDetails.lname} 
        />
        <br/>
        <br/>
        <input type="email" 
        placeholder="Enter Your Email" 
        name="email" 
        onChange={InputEvent}
        value={fullDetails.email} 
        />
        <br/>
        <br/>
        <input type="number" 
        placeholder="Enter Your Phone Number" 
        name="phone" 
        onChange={InputEvent}
        value={fullDetails.phone} 
        />
        <br/>
        <br/>
        <button type="submit">Submit 👍</button>
       </form>
      </div>
    </>
  );
}

export default App;