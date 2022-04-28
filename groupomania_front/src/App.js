import logo from "./assets/logo_g.png";
import "./App.css";
import Bonjour8 from "./components/tests/Bonjour";

import Body from "./components/Body";

function App() {
  /* if (typeof window !== "undefined") {
    window.location.href = "http://foo.com/error.php";
<img src={logo} alt="logo" />
        <Bonjour8 nom="Joe" />

  } */

  return (
    <div className="App">
      <header className="App-header">
        <Body />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
