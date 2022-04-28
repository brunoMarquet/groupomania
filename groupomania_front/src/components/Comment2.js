//import React, { useState } from "react";

function Comment2(props) {
  const comment = props.comment;
  const userComment = comment.User_com;
  const userLog = localStorage.getItem("userID");

  const alterOk = userComment == userLog ? true : false;

  //const truc=

  //console.log(comment);

  return (
    <div>
      comment - {comment.Text_com}
      <p>Publié par : {comment.persons.Pseudo}</p>
      {alterOk ? (
        <p>
          ok modif <button> ___Take theYYYYYYYYYYYYYYY shot!</button>
        </p>
      ) : (
        <>No</>
      )}
    </div>
  );
  /*  return (
      <div> <p> ecrit par {user.Pseudo}</p>
        <p>son email : {user.Email} </p>
        <button onClick={shoot}>{user.Pseudo} ___Take the shot!</button>
        <button onClick={(event) => shoot2(user.Id_user)}>Take the shot!</button>
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
    ); */
}
export default Comment2;
