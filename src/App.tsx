import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Counter startingValue={5} />
    </div>
  );
};

export default App;
