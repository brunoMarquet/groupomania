import React, { useState } from "react";
import * as outils from "./module/postEditer";

function PostModif2(props) {
  const post = props.post;

  const [inputs, setInputs] = useState({
    titre: post.Titre,
    texte: post.Contenu,
  });
  const [toModif, setToModif] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const delete2 = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" delete id " + a);
  };
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

  const modifPosValid = (a) => {
    //localStorage.setItem("byUser", a);

    console.log(" modifPosValid id " + a);
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
              name="titre"
              placeholder="votre Pseudo"
              value={inputs.titre || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            {" "}
            <div className="intitule"> texte :</div>
            <textarea
              rows="5"
              cols="40"
              type="text"
              name="texte"
              placeholder="votre Pseudo"
              value={inputs.texte || ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => modifPosValid(true)}> valider Modif</button>
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
