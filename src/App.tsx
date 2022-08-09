import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import Joke from "./components/Joke";
import Card from "./components/Card";
import data from "./data";
import JokeData from "./jokeData";
import Button from "./components/Button";
import Memes from "./MemesData";
import Player from "./components/Player";

let jokes = JokeData.map((joke) => {
  return <Joke key={joke.id} {...joke} />;
});

let cards = data.map((card) => {
  return <Card key={card.id} {...card} />;
});

function generateRandomNumber() {
  let randomNumber = Math.random() * Memes.data.memes.length;
  return Math.round(randomNumber);
}

function App() {
  const [things, setThings] = useState(["thing 1", "thing 2"]);
  const addThing = () => {
    setThings((prevThings) => [
      ...prevThings,
      `thing ${prevThings.length + 1}`,
    ]);
  };
  const mappedThings = things.map((thing) => <h2 key={thing}>{thing}</h2>);

  const [memeImage, setMemeImage] = useState("");
  const handleMemeImageClick = () => {
    setMemeImage(Memes.data.memes[generateRandomNumber()].url);
  };
  const [isGoingOut, setIsGoingOut] = useState(false);
  const handleIsGoingOut = () => {
    setIsGoingOut((prevIsGoingOut) => {
      return prevIsGoingOut ? false : true;
    });
  };

  return (
    <div className="App">
      <Player />
      <img src={memeImage}></img>
      <h1 onClick={handleIsGoingOut}>{isGoingOut ? "Yes" : "No"}</h1>
      <button onClick={handleMemeImageClick}>memeBtn</button>
      <button onClick={addThing}>Add thing</button>
      {mappedThings}
      <div>{jokes}</div>
      <div>{cards}</div>
    </div>
  );
}

export default App;
