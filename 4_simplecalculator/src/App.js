import {Add,Sub,Mult,Div} from './Cal';

function App()
{
  return (
      <>
        <ul>
          <li>Sum is{ Add(10,2)}</li>
          <li>Difference is {Sub(10,2)}</li>
          <li>Multiply is {Mult(10,2)}</li>
          <li>Division is {Div(10,3)}</li>
        </ul>
      </>
  );
}

export default App;