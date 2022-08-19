import React, { useState } from "react";

interface Props {
  on: boolean;
  id: number;
  toggle: () => void;
}

const Box = (props: Props) => {
  let [onOrOff, setOnOrOff] = useState<boolean>(props.on);

  const styles = {
    color: "rgb(4, 0, 255)",
    width: "150px",
    height: "150px",
    border: "1px solid orange",
    borderRadius: "4px",
    fontSize: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textShadow: "0px 0px 2px red",
    cursor: "pointer",
    backgroundColor: onOrOff ? "lightgreen" : "lightpink",
  };

  return (
    <div style={styles} onClick={props.toggle}>
      {props.id}
    </div>
  );
};
export default Box;
