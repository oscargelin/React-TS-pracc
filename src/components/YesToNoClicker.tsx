import React, { useState } from "react";

interface IYesToNoClicker {
  textValue: string;
}

const headingStyle = {
  fontSize: "45px",
  color: "darkgreen",
  textShadow: "1px 1px 2px black",
  backgroundColor: "orange",
};

const flexStyle = {
  display: "flex",
  justifyContent: "center",
};
const contentStyle = {
  fontSize: "46px",
  color: "#fff",
  textShadow: "1px 1px 2px black",
};

const YesToNoClicker = ({ textValue }: IYesToNoClicker) => {
  const [signValue, setSignValue] = useState<string>(textValue);

  const handleClick = () => {
    setSignValue((prevSignValue) => {
      let temp = "";
      if (prevSignValue === "Yes") {
        temp = "No";
      } else {
        temp = "Yes";
      }
      return temp;
    });
  };
  const yesColor = "pink";
  const noColor = "teal";

  let boxStyle = {
    width: "160px",
    height: "160px",
    border: "1px solid black",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: signValue === "Yes" ? yesColor : noColor,
  };

  return (
    <div>
      <h2 style={headingStyle}>Is Ranjo a God h4ck3r?</h2>
      <div style={flexStyle}>
        <div style={boxStyle} onClick={handleClick}>
          <h4 style={contentStyle}>{signValue}</h4>
        </div>
      </div>
    </div>
  );
};
export default YesToNoClicker;
