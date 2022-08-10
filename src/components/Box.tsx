import React, { useState } from "react";

interface Props {
  on: boolean;
  id: number;
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
    backgroundColor: onOrOff ? "lightgreen" : "lightpink",
  };
  const handleClick = () => {
    setOnOrOff((prevOnOrOff) => (onOrOff = !prevOnOrOff));
  };

  return (
    <div style={styles} onClick={handleClick}>
      {props.id}
    </div>
  );
};
export default Box;
