
import Slot from './Slot';

 const App=()=>{
  return (
    <>
      <h1 classNameName="heading_style"> Welcome to <span style={{ fontWeight : 'bold',  color:'red'}} >Slot Machine</span> Game</h1>    
      <div classNameName="slotmachine">
      <Slot  x='🤩' y='😄' z='😄'/>
      <Slot x='🤣' y='🤣' z='🤣' />
      <Slot x='🤣' y='🤣' z='🤣' />
      </div>
    </>
  );
}

export default App;
