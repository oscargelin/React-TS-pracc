import React, { useState } from "react";
import RanjoGodHacker from "./components/RanjoGodHacker";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <RanjoGodHacker
        answerOne="Click"
        answerTwo="And"
        answerThree="Find"
        answerFour="Out"
      />
    </div>
  );
};

export default App;
