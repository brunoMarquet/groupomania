import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import * as outils from "./module/postEditer";

function Comment2(props) {
  const comment = props.comment;
  const lePseudo = comment.pseudo;

  //setComments={setComments}
  const theContext = useContext(UserContext);
  const leToken = theContext.token;
  const idUser = theContext.Id_user;
  /*  const userComment = comment.User_com;

   localStorage.getItem("userID"); */

  const [inputs, setInputs] = useState({
    Comment: comment.Text_com,
  });
  function modifCommentRaz() {}
  function deleteComment2() {
    outils.deleteComment(leToken, comment.Id_com);
  }

  //

  let alterOk = comment.User_com == idUser ? true : false;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const modifCommentValid = () => {
    const charge = {
      User_com: idUser,
      Id_com: comment.Id_com,
      // Date_com: dt,
      Text_com: inputs.Comment + " modifié le " + new Date(),
    };

    outils.modifComment(comment.Id_com, leToken, charge);
  };

  return (
    <div className="commentaire">
      <p>
        posté le {comment.Date_com} par {lePseudo}, (id : {comment.User_com})
      </p>
      {alterOk ? (
        <>
          <p>vous pouvez modifier votre Commentaire</p>
          <label>
            <div className="intitule">Commentaire :</div>
            <textarea
              type="text"
              name="Comment"
              value={inputs.Comment || ""}
              onChange={handleChange}
            />
          </label>
          <i className="fas fa-save"></i>
          <button onClick={() => modifCommentValid()}> Modifier</button>
          <button onClick={() => modifCommentRaz()}>Annuler</button>
          <i className="fas fa-trash"></i>
          <button onClick={() => deleteComment2()}>effacer</button>
        </>
      ) : (
        <>
          <div className="commentaire_txt">
            commentaire : {comment.Text_com}
          </div>
          <p>Publié par : {lePseudo}</p>
        </>
      )}
    </div>
  );
}
export default Comment2;

//  <p>{userLog === comment.Id_user ? <>YES</> : <></>} </p>
