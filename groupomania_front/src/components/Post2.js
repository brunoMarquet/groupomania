import React, { useState } from "react";
//import { useState, createContext, useContext } from "react";

import User2 from "./User2";
import Comment2 from "./Comment2";
import Likes2 from "./tests/Likes2";
import PostModif2 from "./PostModif2";

function Post2(props) {
  const post = props.post;
  const comments2 = post.comments;
  const userPost = parseInt(post.Post_user);
  const userLog = parseInt(localStorage.getItem("userID"));
  //console.log(userPost);
  const alterOk = userPost === userLog ? true : false;

  //const [user12, setUser] = useState("Jesse Hall");

  //console.log(post.persons);
  //console.log("comm ", post.comments);
  // console.log("comm NBRE", post.comments.length);

  return (
    <div>
      <h2>{post.Titre}</h2>

      {post.Post_visuel ? (
        <img
          className="pipo"
          src={"http://localhost:3100/images/" + post.Post_visuel}
          alt={`image ${post.Titre} `}
        />
      ) : (
        <></>
      )}
      <p>{post.Contenu}</p>
      <p>posté le {post.Date_post}</p>
      {alterOk ? <PostModif2 post={post} /> : <User2 user={post.persons} />}

      {comments2.length > 0 && (
        <h3>You have {comments2.length} commentaires.</h3>
      )}
      {comments2 &&
        comments2.map((comment) => {
          return (
            <div key={comment.Id_com}>
              <Comment2 comment={comment} />
            </div>
          );
        })}

      <Likes2 likes={post.likes} />
    </div>
  );
}
export default Post2;

/**
 * <Compteur cpt={post.likes.length}></Compteur>
 {post.comments &&
        post.comments.map((comment) => {
          return (
            <div>
              <hr></hr> <Post2 comment={comment}></Post2>
            </div>
          );
        })}
 *
 */
