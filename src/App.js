import React from "react";
//import React-DOM from "react-dom";
import "./styles.css";
import Form from "./Form.js";
import Location from "./Location.js";
import Weather from "./Weather.js";
import Date from "./Date";
import Temp from "./Temp";

export default function App() {
  return (
    <div className="App">
      <h1 className="Name">Papo's Weather App</h1>
      <Form />
      <Location />
      <Date />
      <div class="row">
        <div class="col-6">
          <Weather />
        </div>
        <div class="col-6">
          <Temp />
        </div>
      </div>
    </div>
  );
}
