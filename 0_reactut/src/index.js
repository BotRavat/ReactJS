import Heading from './Heading';
import Body,{name} from './Body';
var React = require('react');
var ReactDOM= require('react-dom');




//  rendering multinple element 
ReactDOM.render(<>
       <Heading />
       {Body()}
       {name}

      
      </>,document.getElementById("root"));
    //   or
// ReactDOM.render([<h1> heee</h1>, 
//       <h2>this is second element</h2>
//       ],document.getElementById("root"));
      
//     //   ------

    

