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
    outils.deleteLike(leToken, idPost);
  }

  function youLove() {
    let dt = new Date();
    dt.setHours(dt.getHours() + 2);
    const dataLike = {
      User_like: idUser,
      Post_like: idPost,
      Date_like: dt,
    };

    outils.addLike(leToken, dataLike);
  }

  let depart = likes.length;

  const [weLike] = useState(depart);
  return (
    <>
      <h3>il y a {weLike} likes</h3>
      <i className="far fa-thumbs-up"></i>
      <i className="fas fa-thumbs-up"></i>

      <button onClick={() => youLove()}>j `&apos;aime</button>

      <hr></hr>
      <i className="far fa-thumbs-down"></i>
      <button onClick={() => youStopLove()}>je n `&apos;aime plus</button>
    </>
  );
}

export default Likes2;

/**
 * <button onClick={() => setCount(count + 1)}>j'aime</button>
      <button onClick={() => setCount(count - 1)}>je n'aime pluss</button>
 */
