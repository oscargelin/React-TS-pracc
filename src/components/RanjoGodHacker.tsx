import React, { useState } from "react";
import style from "../styles/Flex.module.scss";

interface IRanjoGodHacker {
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
}

interface Theme {
  mainColor: string;
  secondaryColor: string;
  thirdColor: string;
  fourthColor: string;
}

const mainTheme: Theme = {
  mainColor: "mediumseagreen",
  secondaryColor: "seagreen",
  thirdColor: "forestgreen",
  fourthColor: "lightgreen",
};
const secondaryTheme: Theme = {
  mainColor: "crimson",
  secondaryColor: "lightsalmon",
  thirdColor: "lightcoral",
  fourthColor: "indianred",
};
const thirdTheme: Theme = {
  mainColor: "lightseagreen",
  secondaryColor: "darkcyan",
  thirdColor: "mediumaquamarine",
  fourthColor: "mediumaquamarine",
};

const fourthTheme: Theme = {
  mainColor: "darkmagenta",
  secondaryColor: "	plum",
  thirdColor: "	indigo",
  fourthColor: "mediumorchid	",
};

const RanjoGodHacker = ({
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
}: IRanjoGodHacker) => {
  const [theTheme, setTheTheme] = useState<Theme>(mainTheme);

  const setMainTheme = () => {
    setTheTheme(mainTheme);
  };

  const setSecondaryTheme = () => {
    setTheTheme(secondaryTheme);
  };

  const setThirdTheme = () => {
    setTheTheme(thirdTheme);
  };
  const setFourthTheme = () => {
    setTheTheme(fourthTheme);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theTheme.secondaryColor,
    height: "100vh",
    width: "100vw",
  };

  const boxStyle = {
    height: "90vh",
    width: "90vw",
    backgroundColor: theTheme.mainColor,
    borderRadius: "12px",
  };

  const headerBoxStyle = {
    backgroundColor: theTheme.thirdColor,
    display: "flex",
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
    width: "500px",
    boxShadow: "1px 1px 4px 4px",
  };

  const headerStyle = {
    color: theTheme.mainColor,
    textShadow: "1px 1px 2px black",
    fontFamily: "sans-serif",
  };

  const answerBoxStyle = {
    display: "flex",
    gap: "70px",
  };

  const answerStyle = {
    color: theTheme.secondaryColor,
    fontFamily: "sans-serif",
    fontSize: "32px",
    textShadow: `1px 1px 2px ${theTheme.mainColor}`,
    backgroundColor: theTheme.fourthColor,
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    minWidth: "200px",
  };

  return (
    <div style={containerStyle}>
      <div className={style.flex} style={boxStyle}>
        <div style={headerBoxStyle}>
          <h1 style={headerStyle}>Is Ranjo a God H4ck3r?</h1>
        </div>
        <div style={answerBoxStyle}>
          <h2 style={answerStyle} onClick={setMainTheme}>
            {answerOne}
          </h2>
          <h2 style={answerStyle} onClick={setSecondaryTheme}>
            {answerTwo}
          </h2>
          <h2 style={answerStyle} onClick={setThirdTheme}>
            {answerThree}
          </h2>
          <h2 style={answerStyle} onClick={setFourthTheme}>
            {answerFour}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default RanjoGodHacker;
