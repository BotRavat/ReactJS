

const Todolist=(props)=>{

    
   
     return <>
    <li>{props.tex}</li> 
     <button 
     onClick={()=>{
          props.onSelect(props.id);
     }}>
     ❌</button> 
       </>
}

export default Todolist;