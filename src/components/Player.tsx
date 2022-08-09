import React, { useState } from "react";
import style from "../styles/Player.module.scss";

interface Player {
  name: string;
  hcp: number;
  age: number;
  favBrand: string;
  favClub: string;
  usesV1: boolean;
}

const ranjo: Player = {
  name: "Ranjo",
  hcp: 19.2,
  age: 30,
  favBrand: "Mizuno",
  favClub: "8-iron",
  usesV1: false,
};

const Player = () => {
  const [player, setPlayer] = useState<Player>(ranjo);
  function iGotClicked() {
    /** @ts-ignore */
    setPlayer((prevPlayer) => {
      return { ...prevPlayer, usesV1: !prevPlayer.usesV1 };
    });
  }
  return (
    <div>
      <button onClick={iGotClicked}>Update player</button>
      <h1>{player.usesV1 ? "V1 Fan boiii" : "Got his shit together"}</h1>
    </div>
  );
};
export default Player;
