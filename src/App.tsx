import React from "react";
import "./App.css";
import Person from "./components/Person";
import Joke from "./components/Joke";

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
      <Person name={antonP.name} age={antonP.age} />
      <Person name={oscar.name} age={oscar.age} />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upVotes={2}
        downVotes={5}
        writer={{ name: "Roffe", age: 42 }}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upVotes={2}
        downVotes={5}
        writer={{ name: oscar.name, age: oscar.age }}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        upVotes={2}
        downVotes={5}
        writer={{ name: antonP.name, age: antonP.age }}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?."
        punchline="Swarm."
        upVotes={2}
        downVotes={5}
        writer={{ name: antonD.name, age: antonD.age }}
      />
    </div>
  );
}

export default App;
