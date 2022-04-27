import logo from "./logo.svg";
import "./App.css";
import ChildOfApp from "./ChildOfApp";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import images from "../public";

function App() {
  console.log(images);
  // why need this dependency?
  // when use API call,

  return <div>
    <div>Hello this is first text</div>
  </div>;
}

export default App;
