//import logo from "./assets/logoGroupo.png";
import { React } from "react";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon_left.svg";

const Header = () => {
  return (
    <header>
      <img src={icon2} className="headerIcon" alt="icon" />

      <img src={icon} className="headerIcon" alt="icon" />
    </header>
  );
};

export default Header;

/***    <span className="icon-test1">???</span>
 * <p>Bienvenue dans votre Espace Groupomania...</p>
 * return <button onClick={() => window.location.reload()}>Refresh</button>;
 */
