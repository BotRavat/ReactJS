import {createContext} from 'react';
import CompA from './CompA';

const FName=createContext();
const LName=createContext();

const App=()=>{



  return (<>
      
      <FName.Provider value={'abc'}>
        <LName.Provider value={'pqr'}>
           <CompA/>
        </LName.Provider> 
         </FName.Provider>
          
  </>)

}

export default App;
export {FName,LName};