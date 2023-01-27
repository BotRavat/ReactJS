import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  const Name = () => {
    return (
      <>
        <h1> This is Name Page</h1>
      </>
    );
  };

  return (
    <div classNameName="App">

   <Link  to='/'> Home</Link>
   <Link to='/Contact'>Contact</Link>
   <Link to='/About'> About</Link>

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/Contact" element=<Contact /> />
        <Route path="/about" element={<About />} />
        <Route path="/about/name" element={<Name/>} />
      </Routes>
    </div>
  );
}

export default App;
