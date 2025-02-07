import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {[2, 3, 4, 5, 6].map((exponent) => (
          <Exponent key={exponent} num={count} exponent={exponent} />
        ))}
      </div>

     {/*  <div className="container">
        <Exponent />
        <ExponentTwo />
        <ExponentThree />
        <ExponentFour />
        <ExponentFive />
        <ExponentSix />
      </div> */}
    </div>
  );
}

export default App;
