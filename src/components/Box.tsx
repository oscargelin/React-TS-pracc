import React, { useState } from "react";
import style from "../styles/Box.module.scss";

interface IBox {
  id: number;
}
const Box = ({ id }: IBox) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const boxClicked = () => {
    return setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div
      className={style.box}
      onClick={boxClicked}
      style={
        clicked ? { backgroundColor: "aqua" } : { backgroundColor: "orange" }
      }
    ></div>
  );
};

//Lägg till useState osv klicka box ska byta färg.

export default Box;
