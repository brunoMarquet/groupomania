import React, { useState } from "react";
import "../styles/Post2.css";
//import { useState, createContext, useContext } from "react";

import User2 from "./User2";
import Comment2 from "./Comment2";
import Likes2 from "./Likes2";
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
  let props1 = {
    user: post.persons,
    type: "noConnect",
  };

  return (
    <article className="unPost">
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
      <div className="contenu">{post.Contenu}</div>
      <p>posté le {post.Date_post}</p>
      by :{post.Post_user}
      <User2 {...props1} />
      <PostModif2 post={post} />
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
    </article>
  );
}
export default Post2;

/**  <User2 user={post.persons} />
 * 
 * 
 *  {alterOk ? <PostModif2 post={post} /> : <User2 user={post.persons} />}
 * 
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
