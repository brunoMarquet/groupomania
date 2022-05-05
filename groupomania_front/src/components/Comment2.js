import React, { useState } from "react";

function Comment2(props) {
  const comment = props.comment;
  const userComment = comment.User_com;
  const userLog = localStorage.getItem("userID");

  const [inputs, setInputs] = useState({
    Comment: comment.Text_com,
  });

  const alterOk = userComment == userLog ? true : false;
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
          <p>vous pouvez modifier votre message</p>
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
          <div className="commentaire_txt">comment : {comment.Text_com}</div>
          <p>Publié par : {comment.persons.Pseudo}</p>
        </>
      )}
    </div>
  );
}
export default Comment2;
