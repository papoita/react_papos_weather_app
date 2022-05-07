import React from "react";

function Temp(props) {
  function fahrenheiteTemp() {
    return (props.temperature * 9) / 5 + 32;
  }
  return (
    <div className="Temp">
      <strong id="temp-input">{props.temperature}</strong>
      <small id="celcius">°C</small>
      <strong id="temp-input">{fahrenheiteTemp()}</strong>
      <small id="celcius">°F</small>
    </div>
  );
}

export default Temp;
