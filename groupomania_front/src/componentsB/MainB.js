import { React, useState, useEffect, useContext } from "react";

import PostB from "./PostB";
import PostModifB from "./PostModifB";
import TriFormB from "./TriformB";
import * as outils from "./module/toolBd";
import { UserContext } from "../AppB";

//import FormPost2 from "./FormPost2";

function MainB() {
  /* props.user ? console.log(props.user) : console.log("NO");
  props.token ? console.log("token ", props.token) : console.log("NO"); */
  //const [tri, setTri] = useState("Date_post");
  const [posts, setPosts] = useState([]);
  const [tri, setTri] = useState({
    ord: "ASC",
    nbrMax: "4",
    matter: "Date_post",
  });

  const theContext = useContext(UserContext);
  const token2 = theContext.token;

  function refreshPosts() {
    if (theContext.Id_fonction == 0) {
      outils.showPosts(token2, tri).then((data) => setPosts(data));
    }
    if (theContext.Id_fonction == "postByUser") {
      const Id_user = theContext.Id_user;
      outils.showPostsByUser(Id_user, token2).then((data) => setPosts(data));
    }
  }
  function test32() {
    const tri = { ord: "DESC", nbrMax: "3", matter: "Titre" };
    outils.showPosts(token2, tri).then((data) => setPosts(data));
  }
  function testSql() {
    const reqSql = "SELECT Post_id, Titre FROM posts LIMIT 5";
    // "SELECT COUNT(Id_com) AS NumberOfProducts FROM comments  WHERE Post_com=113";
    //SELECT COUNT(Id_like) AS NumberOfProducts FROM likes WHERE Post_like=102
    //const reqSql = "SELECT Post_id, Titre FROM titi";

    //outils.requeteSql(token2, { requete: reqSql });
    outils.test34(token2, { requete: reqSql });
  }
  function Truc26() {
    return (
      <>
        coucou truc 26
        <form action="fileupload" method="post" encType="multipart/form-data" />
        <input type="file" name="filetoupload" />
        <input type="submit" />
      </>
    );
  }

  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <div>
      <Truc26 />
      <button onClick={() => test32()}> TEST 32 !</button>
      TEST ??????<button onClick={() => testSql()}> TEST sql !</button>
      <hr></hr>
      <TriFormB refreshPosts={refreshPosts} setTri={setTri} />
      <PostModifB />
      <h3>Lorem</h3>
      <h2>Total Posts : {posts.length} !</h2>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id}>
              <hr></hr> <PostB post={post} />
            </div>
          );
        })}
      <h3>Lorem</h3>
      <h3>Lorem</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni
      sint minus, ipsam similique consectetur officiis numquam culpa a excepturi
      corrupti inventore reprehenderit quia ullam quos magnam! Illum, voluptate
      iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto rem
      sapiente blanditiis esse! Consequatur eaque molestias, blanditiis
      obcaecati numquam deserunt est odit repellendus, repudiandae ullam
      officiis laudantium! Quo, id laudantium.
      <p>Search: à revoirUUUUUUUUUUUUUUU</p>
    </div>
  );
}

export default MainB;

//url3 = "http://localhost:3100/api/posts/userId/15";
//pas ok car retours #

/**
 * id={"post_G_" + post.Post_id}
 * 
 *  value={inputs.username || ""}
              onChange={handleChange}
 */
//
/**
 *
 * 
 <TriFormn refreshPosts={refreshPosts} />
  {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id}>
              <hr></hr> <Post2 post={post}></Post2>
            </div>
          );
        })}
    <h2>Total Posts : {posts.length} !</h2>



    ////////
    {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id}>
              <hr></hr> <Post2 post={post}></Post2>
            </div>
          );
        })}
 */
