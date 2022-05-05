import ReactDOM from "react-dom";
import App from "./App";

const container = document.getElementById("root");

ReactDOM.render(<App name="forum" />, container, function () {
  // Called after inital render or any update.
  console.log("ok ..");
});
