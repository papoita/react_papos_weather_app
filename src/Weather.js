import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h3 class="hard-text conditions" id="conditions">
        Clear Sky
      </h3>
      <h3 class="hard-text humidity" id="humidity">
        Humidity 57 %
      </h3>
      <h3 class="hard-text wind" id="feels">
        Feels like 10 °C
      </h3>
    </div>
  );
}
