//import logo from "./assets/logoGroupo.png";
import { React } from "react";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon_left.svg";

const Header = () => {
  return (
    <header>
      <span className="icon-test1">???</span>
      <img src={icon2} className="headerIcon" alt="icon" />
      <hr></hr>
      <img src={icon} className="headerIcon" alt="icon" />
      <p>Bienvenue dans votre Espace Groupomania...</p>
    </header>
  );
};

export default Header;

/***
 * return <button onClick={() => window.location.reload()}>Refresh</button>;
 */
