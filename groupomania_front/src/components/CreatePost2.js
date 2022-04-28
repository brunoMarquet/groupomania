//import React, { useState } from "react";
//import * as Module from "./components/module/postEditer";
import * as outils from "../components/module/postEditer";

function CreatePost2(props) {
  const userLog = props.userLog;

  const shoot2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" creer id " + a);
    /*b.type
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  };

  return (
    <div>
      <p>votre post</p>
      <p>Titre :</p>
      <textarea
        id="theTitle"
        rows="5"
        cols="40"
        value=" votre titre"
      ></textarea>
      <br />
      <p>Contenu :</p>
      <textarea id="theText" rows="5" cols="40">
        votre texte
      </textarea>
      <br />
      <button onClick={(event) => outils.createPost(userLog)}>
        ___créer__!
      </button>
    </div>
  );
  /* 




      
  
  
  
  return (
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
export default CreatePost2;
