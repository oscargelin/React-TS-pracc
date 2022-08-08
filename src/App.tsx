import React from "react";
import "./App.css";
import Person from "./components/Person";
import Joke from "./components/Joke";
import Card from "./components/Card";
import data from "./data";
import JokeData from "./jokeData";

let jokes = JokeData.map((joke) => {
  return <Joke key={joke.id} {...joke} />;
});

let cards = data.map((card) => {
  return <Card key={card.id} {...card} />;
});

function App() {
  return (
    <div className="App">
      <div>{jokes}</div>
      <div>{cards}</div>
    </div>
  );
}

export default App;
