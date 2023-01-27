import './App.css';
import {useState} from 'react';
import ToDoList from './ToDoList';

const App=()=>{
  
  const[item,setItem]=useState("");
  const[fitem,fsetItem]=useState([]);
    
  

  const OnChange=(e)=>{
        setItem( e.target.value);
  }
  
  const Sub=(e)=>{
    fsetItem(
       (preValue)=>{
          return [...preValue,item];
       }
    ); 
    setItem('');
}


const DeleteItem=(id)=>{
     fsetItem((preValue)=>{
      return preValue.filter((arrEle,index)=>{
                return index !==id;
      })
     })

}

  return(
    <>
        
        <div classNameName="main_div">
          <div classNameName="center_div">
            <h1>ToDo List</h1>
            <br/>
            <input type="text" onChange={OnChange} value={item} placeholder="Add a Item" />
            <button onClick={Sub}>➕</button>
            <ul>
                {
                  fitem.map((ival,index)=>{
                     return <ToDoList 
                     key={index} 
                     id={index} 
                     tex={ival}
                     onSelect={DeleteItem}
                     />
                  })
                }
            </ul>
          </div>
        </div>
        


    </>
  );

}

export default App;