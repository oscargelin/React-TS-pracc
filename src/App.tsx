import React from "react";
import "./App.css";
import Person from "./components/Person";
import Joke from "./components/Joke";
import Card from "./components/Card";
import data from "./data";
import JokeData from "./jokeData";

let jokes = JokeData.map((joke) => {
  return (
    <Joke
      setup={joke.setup}
      punchline={joke.punchline}
      upVotes={joke.upVotes}
      downVotes={joke.downVotes}
      writer={{ name: joke.writer.name, age: joke.writer.age }}
    />
  );
});

let cards = data.map((card) => {
  return (
    <Card
      id={card.id}
      title={card.title}
      description={card.description}
      price={card.price}
      coverImg={card.coverImg}
      stats={{ rating: card.stats.rating, reviewCount: card.stats.reviewCount }}
      location={card.location}
      openSpots={card.openSpots}
    />
  );
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
