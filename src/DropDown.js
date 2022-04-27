import React from "react";
import "./App.css";

function DropDown({ dropDown }) {
  

  return (
    <div className="navbar__dropDown">
      {dropDown.map((item, id) => (
        <div key={id} className="dropDown__item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default DropDown;
