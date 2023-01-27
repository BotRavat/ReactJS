import { useState } from "react";

const App = () => {
  // const state=useState();
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  //let newTime=new Date().toLocaleTimeString();

  const IncNum = () => {
    count++;
    setCount(count);
  };

  const CurrTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      {" "}
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
        <h1>{time}</h1>
        <button onClick={CurrTime}>Get Time</button>
      </div>
    </>
  );
};

export default App;
