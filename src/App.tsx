import React, { useState } from "react";
import YesToNoClicker from "./components/YesToNoClicker";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <YesToNoClicker textValue="Yes" />
    </div>
  );
};

export default App;
