import React from "react";
import "./App.css";

let temp: number = 123;
let tempTwo: string = "123";
let tempThree: boolean = false;

type Person = {
  name: string;
  age: number;
};

let oscar: Person = {
  name: "Oscar",
  age: 30,
};
let antonP: Person = {
  name: "AntonP",
  age: 30,
};

let antonD: Person = {
  name: "AntonD",
  age: 30,
};
let LB: Person[] = [oscar, antonP, antonD];

function App() {
  console.log(LB);
  return (
    <div className="App">
      <h1>{temp}</h1>
      <h2>{tempTwo}</h2>
      <h3>{tempThree ? "123" : "456"}</h3>
    </div>
  );
}

export default App;
