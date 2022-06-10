import React, { useState, useContext } from "react";
//import * as outils from "./module/postEditer";
import { UserContext } from "../App";
import * as outils from "./module/toolBd";
//import { createPost } from "../../../groupomania_back/v0/controllers/ctrPost";

function PostComment(props) {
  const postId = props.postId; //faux
  const [inputs, setInputs] = useState({});

  const [toModif, setToModif] = useState(false);
  const theContext = useContext(UserContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function createComment() {
    let dt = new Date();
    //alert(dt);
    dt.setHours(dt.getHours() + 2);

    const leToken = theContext.token;
    const idUser = theContext.Id_user;
    const dataComment = {
      User_com: idUser,
      Post_com: postId,
      Text_com: inputs.Text_com,
      Date_com: dt,
      Visuel_com: "",
    };

    console.log("dataComment : ", dataComment);

    outils
      .writeComment(leToken, dataComment)
      .then((retour) => {
        props.addComment(retour);
        //console.log("User_like", retour.User_like);
        //setTabLike((tabLike) => [...tabLike, retour.User_like]);
      })
      .catch((error) => console.log(error));
  }

  const annuler = (a) => {
    setToModif(a);
  };

  return (
    <div className="">
      {toModif ? (
        <div>
          <form></form>
          <label>
            <div className="intitule">commentaire :</div>
            <textarea
              type="text"
              name="Text_com"
              placeholder="votre Commentaire"
              value={inputs.Text_com || ""}
              onChange={handleChange}
            />
          </label>

          <i className="fas fa-save"></i>
          <button onClick={() => createComment()}> Créer Commentaire</button>
          <i className="fas fa-trash"></i>
          <button onClick={() => annuler(false)}> Annuler</button>
        </div>
      ) : (
        <div>
          <i className="fas fa-edit" onClick={() => annuler(true)}></i> ......
          <button onClick={() => annuler(true)}>Commenter ?</button>
        </div>
      )}
    </div>
  );
}
export default PostComment;
