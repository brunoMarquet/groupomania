//import React, { useState } from "react";
import * as outils from "./module/postEditer";

function PostModif2(props) {
  const post = props.post;
  //console.log("truc ", post);

  const delete2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" delete id " + a);
  };
  const modifPost2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" modifPost2 id " + a);
  };

  return (
    <div>
      <h2>vous avez les droits</h2>
      <p>
        <button onClick={() => outils.deletePost(post.Post_id)}>delete</button>
        <button onClick={() => modifPost2(post.Post_id)}>moddifier</button>
        <p>Titre :</p>
        <textarea id="theTitle_${post.Post_id)}" rows="5" cols="40">
          {post.Titre}
        </textarea>
        <br />
        <p>Contenu :</p>
        <textarea id="theText_${post.Post_id)}" rows="5" cols="40">
          {post.Contenu}
        </textarea>
        <br />
        <button type="submit" onclick="modifPosValid( ${Post_id},${Post_user})">
          valider Modif
        </button>
      </p>
    </div>
  );
  /*  <p>son email : {user.Email} </p>

      <button onClick={(event) => shoot2(user.Id_user)}>
        {user.Pseudo} ___Take the shot!
      </button>
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
export default PostModif2;
