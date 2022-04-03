import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form class="search-form" id="city-form">
        <div class="row">
          <div class="col-2">
            <button class="btn btn-primary w-100" id="current-location-button">
              <i class="fas fa-map-pin"></i>
            </button>
          </div>
          <div class="col-7">
            <input
              type="search"
              class="form-control shadow-sm"
              id="city-input"
              placeholder="Enter a City"
              autofocus="on"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              class="btn btn-warning w-100"
              id="search"
              value="GO"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
