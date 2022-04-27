import React, { useState } from "react";
import "./App.css";

function ChildOfApp({ handleAdd }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  

  return (
    <div>
      <input
        id="input"
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}

export default ChildOfApp;
