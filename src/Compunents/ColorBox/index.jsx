import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";
ColorBox.propTypes = {};
function getRandomColor(params) {
  const COLOR_LIST = ["green", "crimson", "red", "deeppink", "blue"];
  const randomIndex = Math.floor(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);

    return initColor;
  });
  function handleBoxClick(params) {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <h3>ColorBox</h3>
    </div>
  );
}

export default ColorBox;
