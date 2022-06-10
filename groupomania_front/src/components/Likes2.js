import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import * as outils from "./module/postEditer";

function Likes2(props) {
  const likes = props.likes;
  const idPost = props.idPost;

  const theContext = useContext(UserContext);
  const leToken = theContext.token;
  const idUser = theContext.Id_user;

  function youStopLove() {
    outils
      .deleteLike(leToken, idPost)
      .then((retour) => {
        if (retour.count === 1) {
          /* 
          old méthodeslet tempT = [...tabLike];
          tempT.splice(alreadyLike, 1);
          setTabLike(tempT); */
          setTabLike(tabLike.filter((item) => item !== idUser));
        }
      })
      .catch((error) => console.log(error));
  }

  function youLove() {
    let dt = new Date();
    dt.setHours(dt.getHours() + 2);
    const dataLike = {
      User_like: idUser,
      Post_like: idPost,
      Date_like: dt,
    };

    outils
      .addLike(leToken, dataLike)
      .then((retour) => {
        //console.log("User_like", retour.User_like);
        setTabLike((tabLike) => [...tabLike, retour.User_like]);
      })
      .catch((error) => console.log(error));
  }

  const [tabLike, setTabLike] = useState(likes);
  const alreadyLike = tabLike.indexOf(idUser);

  return (
    <>
      <h3>
        il y a {tabLike.length} likes _ {alreadyLike} index of
      </h3>
      {alreadyLike === -1 ? (
        <>
          <i className="far fa-thumbs-up btLike"></i>
          <i className="fas fa-thumbs-up btLike"></i>
          <button onClick={() => youLove()}>j `&apos;aime</button>
        </>
      ) : (
        <>
          <i className="far fa-thumbs-down btLike"></i>
          <button onClick={() => youStopLove()}>je n `&apos;aime plus</button>
        </>
      )}
    </>
  );
}

export default Likes2;
