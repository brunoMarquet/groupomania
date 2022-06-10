import { React, useContext, useState } from "react";
import "../styles/Post2.css";
//import * as outils from "./module/postEditer";
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

  const [toModif, setToModif] = useState(false);
  // console.log(sumUpLike(post.likes));
  function modifPost21() {
    setToModif(true);
  }
  //const like3 = sumUpLike(post.likes);

  function sumUpLike(likes) {
    let like3 = [];
    for (const like of likes) {
      like3.push(like.User_like);
    }
    return like3;
  }

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
  function ModifInterne() {
    return (
      <>
        <h1>coucou BBBBBBBBBBBBBBBB {toModif}</h1>
        modifier TItre : <p>{post.Titre}</p>,Contenu : {post.Contenu},
      </>
    );
  }

  return (
    <article className="unPost" id={"post_" + post.Post_id}>
      <h2 id={"titre_" + post.Post_id}>{post.Titre}</h2>
      <p>
        id(prov) : {post.Post_id} , post.persons by :{post.Post_user}
      </p>
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

      {post.persons ? (
        <>
          <h2>
            écrit par {post.persons.Pseudo} <i className="fas fa-user"></i>
            <button onClick={() => myPosts()}>Ses posts !</button>
          </h2>
        </>
      ) : (
        <></>
      )}
      {userPost === userLog ? (
        <>
          <button onClick={() => modifPost21()}> MODIFIER ?</button>
          <hr></hr>
          <PostModif2 post={post} />
          {toModif === true ? <ModifInterne /> : <></>}
        </>
      ) : (
        <></>
      )}

      {comments2.length > 0 && (
        <div>
          <h3>il y a {comments2.length} commentaires.</h3>

          <Comments2 postId={post.Post_id} comments={comments2}></Comments2>
        </div>
      )}
      <Likes2 likes={sumUpLike(post.likes)} idPost={post.Post_id} />
    </article>
  );
}
export default Post2;

/** 
 * 
 * <label>
          <div className="intitule">titre :</div>
          <textarea
            type="text"
            name="Titre"
            placeholder="votre Pseudo"
            value={inputs.Titre || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="intitule"> texte ! :</div>
          <textarea
            rows="5"
            cols="40"
            type="text"
            name="Contenu"
            placeholder="votre Pseudo"
            value={inputs.Contenu || ""}
            onChange={handleChange}
          />{" "}
        </label>
        <br></br>
        <label>
          Envoyer un fichier: ou garder le {inputs.Post_visuel} ....<br></br>
          <input type="file" ref={fileInput} />
        </label>
 * _____________
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
