import React from "react";
import "../styles/User2.css";

import * as outils from "./module/postEditer";
function User3(props) {
  const user = props.user;
  const type = props.type;

  const shoot2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log("id " + a);
  };
  function Connect() {
    return (
      <>
        Bonjour {user.Pseudo}
        <p>votre email : {user.Email} </p>
        <button onClick={(event) => outils.deConnect(user.Id_user)}>
          se deconnecter!
        </button>
        <button onClick={(event) => shoot2(user.Id_user)}>
          modifier mes infos!
        </button>
        <button onClick={(event) => shoot2(user.Id_user)}>mes posts!</button>
        <button onClick={(event) => shoot2(user.Id_user)}>
          mes commentaires!
        </button>
      </>
    );
  }
  function Info2() {
    return (
      <>
        {" "}
        posté par {user.Pseudo}!!
        <button onClick={(event) => shoot2(user.Id_user)}>
          voir ses posts
        </button>
      </>
    );
  }

  return (
    <div className="pseudo_log">
      {/*  {type == "userConnect" ? <Connect /> : <Info2 />} */}
      {(() => {
        switch (type) {
          case "userConnect" /*Case 0 */:
            return <Connect />;
            break;
          case "noConnect" /*Case.... */:
            return <Info2 />;
            break;
          case 2 /*Case 2 */:
            return <div>Case 2</div>;
            break;
          default:
            console.log(`Sorry, we are out of `);
            return <>ERRRRRR</>;
        }
      })()}
    </div>
  );
  /*  return (
    <div><button onClick={shoot}>Take the shot!</button>
     <hr /> 
      <br />
      votre email : {user.Email} <br />
      {user.Id_user}
      <br />
      <a href="#" onClick={logOut(user.Id_user)}>
        {user.Pseudo} Clique ici !
      </a>
      <hr></hr>
      <button onClick={logOut2(user.Id_user)}>logOut2 la ligne</button>
    </div>
  ); 
  avec
  const shoot = () => {
    console.log("Great Shot!");
  };
  */
}
export default User3;
/**
 *
 */
