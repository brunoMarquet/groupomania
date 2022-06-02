import React, { useState } from "react";

function Comment2(props) {
  const comment = props.comment;
  /*  const userComment = comment.User_com;

  const userLog = localStorage.getItem("userID"); */

  const [inputs, setInputs] = useState({
    Comment: comment.Text_com,
  });

  const alterOk = true; //userComment == userLog ? true : false;
  //console.log(comment.User_com, " _=?__", comment.Comment2Text_com);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const modifCommentValid = (byUser) => {
    console.log(" modifCommentValid id " + byUser);
  };

  const postBy = comment.persons.Id_user;

  return (
    <div className="commentaire">
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

          <button onClick={() => modifCommentValid(postBy)}>faire Modif</button>
        </>
      ) : (
        <>
          <div className="commentaire_txt">
            commentaire : {comment.Text_com}
          </div>
          <p>Publié par : {comment.persons.Pseudo}</p>
          <p>{comment.Date_com}</p>
        </>
      )}
    </div>
  );
}
export default Comment2;

//  <p>{userLog === comment.Id_user ? <>YES</> : <></>} </p>
