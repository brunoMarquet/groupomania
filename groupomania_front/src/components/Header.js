//import logo from "./assets/logoGroupo.png";
import { React, useContext } from "react";
import logo from "../assets/logoGroupo.png";
import { UserContext } from "../App";

const Header = () => {
  const theContext = useContext(UserContext);
  return (
    <header>
      <img src={logo} alt="Logo" />
      <p> mon header...</p>
      {theContext.Pseudo}, ( id : {theContext.Id_user})
    </header>
  );
};

export default Header;

/***
 *
 */
