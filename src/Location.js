import React from "react";

export default function Location(props) {
  return (
    <div className="Location">
      <h2 class="hard-text text-center city" id="city">
        {props.city}
      </h2>
    </div>
  );
}
