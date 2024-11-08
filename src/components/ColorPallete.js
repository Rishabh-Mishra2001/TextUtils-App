import React, { useState } from "react";

function ColorPallete(props) {
  const [toggleColor, setToggleColor] = useState(false);
  const changeColor = () => {
    setToggleColor(!toggleColor);
    document.body.style.backgroundColor = toggleColor
      ? props.bgColor
      : "rgb(213 221 228)";
  };
  return (
    <div
      className="pallette me-3"
      style={{
        backgroundColor: props.bgColor,
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
      }}
      onClick={changeColor}
    ></div>
  );
}

export default ColorPallete;
