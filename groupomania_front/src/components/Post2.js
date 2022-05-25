import { React, useContext } from "react";
import "../styles/Post2.css";
//import { useState, createContext, useContext } from "react";

//import Comment2 from "./Comment2";
import Likes2 from "./Likes2";
import PostModif2 from "./PostModif2";
import Comments2 from "./Comments2";

import { UserContext } from "../App";

import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function Post2(props) {
  const theContext = useContext(UserContext);
  const post = props.post;
  const comments2 = post.comments;
  const userPost = parseInt(post.Post_user);
  const userLog = theContext.Id_user;
  // theContext.setContext(theContext.Id_user)

  //const userLog = parseInt(localStorage.getItem("userID"));
  //console.log(userPost);
  //const alterOk = userPost === userLog ? true : false;

  //const [user12, setUser] = useState("Jesse Hall");

  //console.log(post.persons);
  //console.log("comm ", post.comments);
  // console.log("comm NBRE", post.comments.length);

  /*  let props1 = {
    user: post.persons,
    type: "noConnect",
    <User2 {...props1} />
  };
 */
  function myPosts() {
    console.log("myPosts");
    return;
    /* const theContext3 = {
      ...theContext,
      //Id_user: post.Post_user,

      Id_fonction: "postByUser",

      // Pseudo: post.persons.Pseudo,
    };

    //console.log("theContext3 modif ", theContext3);
    ReactSession.set("theContext", theContext3);

    
    theContext.setContext({
      ...theContext,
      Id_fonction: "postByUser",
      Id_user: post.Id_user,
      Pseudo: post.persons.Pseudo,
    }); */
  }

  return (
    <article className="unPost" id={"post_" + post.Post_id}>
      <h2 id={"titre_" + post.Post_id}>{post.Titre}</h2>
      {post.Post_visuel ? (
        <img
          className="pipo"
          src={"http://localhost:3100/images/" + post.Post_visuel}
          alt={`image ${post.Titre} `}
        />
      ) : (
        <>pas de visuel !</>
      )}
      <div className="contenu" id={"text_" + post.Post_id}>
        {post.Contenu}
      </div>
      <p>posté le {post.Date_post}</p>
      post.persons by :{post.Post_user}
      {post.persons ? (
        <>
          <h2>
            écrit par {post.persons.Pseudo}
            <button onClick={() => myPosts()}>ses posts!</button>
          </h2>
        </>
      ) : (
        <></>
      )}
      {userPost === userLog ? <PostModif2 post={post} /> : <></>}
      {comments2.length > 0 && (
        <div>
          <h3>You have {comments2.length} commentaires.</h3>

          <Comments2 comments={comments2}></Comments2>
        </div>
      )}
      <Likes2 likes={post.likes} />
    </article>
  );
}
export default Post2;

/** 
 *  <p>PIPO</p>
          <PostModif2 post={post} refreshPosts={props.refreshPosts} />
 * 
 *  {comments2.length > 0 && (
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
 * 
 * 
 * 
 * 
 * 
 *  <User2 user={post.persons} />
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
