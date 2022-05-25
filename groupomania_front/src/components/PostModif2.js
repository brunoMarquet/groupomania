import React, { useState, useContext } from "react";
import * as outils from "./module/postEditer";
import { UserContext } from "../App";
//import { createPost } from "../../../groupomania_back/v0/controllers/ctrPost";

function PostModif2(props) {
  const post = props.post;
  const theContext = useContext(UserContext);

  if (post.Post_visuel) {
    console.log("visuel ", post.Post_visuel);
    ///???
  }
  const [inputs, setInputs] = useState(
    {
      Titre: post.Titre,
      Contenu: post.Contenu,
    }

    //Post_visuel=post.Post_visuel
  );
  const [toModif, setToModif] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function createPost() {
    //alert(inputs);

    const leToken = theContext.token;
    const idUser = theContext.Id_user;

    console.log(inputs);

    outils.ModCreatePost(idUser, leToken, inputs);
  }
  function modif() {
    // console.log("oooo ji", inputs);
    const leToken = theContext.token;
    outils.modifPosts(post.Post_id, leToken, inputs);
    // props.refreshPosts();
  }
  /* const delete2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" delete id " + a);
  }; */
  const modifPost2 = (a) => {
    //localStorage.setItem("byUser", a);
    setToModif(a);
    console.log(" modifPost2 id " + a);
  };
  const annuler = (a) => {
    //localStorage.setItem("byUser", a);
    setToModif(false);
    console.log(" modifPost2 id " + a);
  };

  return (
    <div className="modifier_post">
      <h2>Auteur donc vous avez les droits</h2>

      {toModif ? (
        <div>
          <label>
            <div className="intitule">titre :</div>
            <textarea
              type="text"
              name="Titre"
              placeholder="votre Pseudo"
              value={inputs.Titre || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="intitule"> texte ! :</div>
            <textarea
              rows="5"
              cols="40"
              type="text"
              name="Contenu"
              placeholder="votre Pseudo"
              value={inputs.Contenu || ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => modif()}> valider Modif Now</button>
          <button onClick={() => createPost()}> Creer Now</button>

          <button onClick={() => annuler(false)}>Abandonner</button>
        </div>
      ) : (
        <div>
          <button onClick={() => outils.deletePost(post.Post_id)}>
            effacer
          </button>
          <button onClick={() => modifPost2(post.Post_id)}>modifier</button>
        </div>
      )}
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
