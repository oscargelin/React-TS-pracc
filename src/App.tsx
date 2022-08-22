import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 13, 14, 15, 64, 16, 17, 18];
  let temp = arr.map((thing) => {
    console.log(thing);
    return <Box key={thing} id={thing} />;
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "yellow",
        height: "100%",
        padding: "10vh",
      }}
    >
      {temp}
    </div>
  );
};

export default App;
