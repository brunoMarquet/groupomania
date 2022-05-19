import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Post3 from "./components/Post3";
import "./styles/index.css";

const container = document.getElementById("root");

ReactDOM.render(<App name="forum" />, container, function () {
  // Called after inital render or any update.
  console.log("ok ..");
});
