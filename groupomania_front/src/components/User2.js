//import React, { useState } from "react";
import * as ModulePost from "./module/postEditer";
function User3(props) {
  const user = props.user;

  const shoot2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log("id " + a);
    /*b.type
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  };

  return (
    <div>
      <p> ecrit par {user.Pseudo}</p>
      <p>son email : {user.Email} </p>

      <button onClick={(event) => shoot2(user.Id_user)}>
        {user.Pseudo} ___Take the shot!
      </button>
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
