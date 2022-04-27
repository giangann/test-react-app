import logo from "./logo.svg";
import "./App.css";
import ChildOfApp from "./ChildOfApp";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
// import images from "../public"

function App() {
  const [number, setNumber] = useState(0);
  const [bindNumber, setBindNumber] = useState(number);

  const [count, setCount] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../public/image/Feed_Image", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(images);
  
  // why need this dependency?
  // when use API call,

  return (
    <div>
      <div>Number: {number} </div>
      <div>Bind Number: {bindNumber} </div>
    </div>
  );
}

export default App;
