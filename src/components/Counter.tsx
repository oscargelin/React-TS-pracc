import React, { useState } from "react";

interface ICounter {
  startingValue: number;
}

const backroundContainerStyle = {
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const boxStyle = {
  height: "200px",
  width: "200px",
  backgroundColor: "yellow",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
};

const minusBoxStyle = {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  backgroundColor: "red",
};

const plusBoxStyle = {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  backgroundColor: "green",
};

const counterStyle = {
  fontSize: "60px",
};
const Counter = ({ startingValue }: ICounter) => {
  const [counter, setCounter] = useState<number>(startingValue);

  const decrementCounter = () => setCounter((prevCounter) => prevCounter - 1);
  const incrementCounter = () => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div style={backroundContainerStyle}>
      <div style={minusBoxStyle} onClick={decrementCounter}>
        <h3>-</h3>
      </div>
      <div style={boxStyle}>
        <h2 style={counterStyle}>{counter}</h2>
      </div>
      <div style={plusBoxStyle} onClick={incrementCounter}>
        <h3>+</h3>
      </div>
    </div>
  );
};
export default Counter;
