import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import Joke from "./components/Joke";
import Card from "./components/Card";
import data from "./data/data";
import JokeData from "./data/jokeData";
import Button from "./components/Button";
import Memes from "./data/MemesData";
import Player from "./components/Player";
import Counter from "./components/Counter";
import Star from "./components/Star";
import Body from "./components/Body";
import Header from "./components/Header";
import Boxes from "./data/boxes";
import Box from "./components/Box";

interface Meme {
  topText: string;
  bottomText: string;
  randomImage: string;
}

interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isFavorite: boolean;
}
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

  const [isGoingOut, setIsGoingOut] = useState(false);
  const handleIsGoingOut = () => {
    setIsGoingOut((prevIsGoingOut) => {
      return prevIsGoingOut ? false : true;
    });
  };

  const memeOne: Meme = {
    topText: "",
    bottomText: "",
    randomImage: Memes.data.memes[0].url,
  };
  const [meme, setMeme] = React.useState<Meme>(memeOne);
  const [allMemesImages, setAllMemesImages] = useState(Memes);

  const handleMeme = () => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: Memes.data.memes[generateRandomNumber()].url,
      };
    });
  };

  const [counter, setCounter] = useState(0);

  const [contact, setContact] = React.useState<Contact>({
    firstName: "John",
    lastName: "Doe",
    phone: "+467035789834",
    email: "John_Doe@hotmail.com",
    isFavorite: true,
  });
  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };

  const [user, setUser] = useState("Joe");

  const [boxes, setBoxes] = useState(Boxes);
  const mappedBoxes = boxes.map((box) => {
    return <Box key={box.id} id={box.id} on={box.on} />;
  });

  return (
    <div className="App">
      <div className="flex">{mappedBoxes}</div>
      <Header user={user} />
      <Body user={user} />
      <Counter counter={counter} />
      <Player />
      <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      <img src={meme.randomImage}></img>
      <h1 onClick={handleIsGoingOut}>{isGoingOut ? "Yes" : "No"}</h1>
      <button onClick={handleMeme}>memeBtn</button>
      <button onClick={addThing}>Add thing</button>
      {mappedThings}
      <div>{jokes}</div>
      <div>{cards}</div>
    </div>
  );
}

export default App;
