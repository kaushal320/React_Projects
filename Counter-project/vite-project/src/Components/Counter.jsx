import React, { useState } from "react";
import "../Style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <div className="number">{count}</div>
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
