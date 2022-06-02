import { React, useState, useEffect, useContext } from "react";

import Post2 from "./Post2";
import PostModif22 from "./PostModif22";
import * as outils from "./module/postEditer";
import { UserContext } from "../App";

//import FormPost2 from "./FormPost2";

function ThePost() {
  /* props.user ? console.log(props.user) : console.log("NO");
  props.token ? console.log("token ", props.token) : console.log("NO"); */
  const [tri, setTri] = useState("Date_post");
  const [posts, setPosts] = useState([]);

  const theContext = useContext(UserContext);
  const token2 = theContext.token;

  const handleChange2 = (e) => {
    //alert(e.target.value);
    setTri(e.target.value);
    // console.log("choix  ", tri);
  };
  const handleChange3 = (e) => {
    console.log(e.target.value);
    //setTri(e.target.value);
  };
  function searchPosts() {
    outils.searchPostTxt(token2, { Titre: "Boulevard" });
  }

  function refreshPosts() {
    if (theContext.Id_fonction == 0) {
      // console.log("??", tri);
      outils.showPosts(token2, tri).then((data) => setPosts(data));
      //Post_user,,Date_post
    }
    if (theContext.Id_fonction == "postByUser") {
      const Id_user = theContext.Id_user;
      outils.showPostsByUser(Id_user, token2).then((data) => setPosts(data));
    }
  }
  function Trier() {
    return <>coco</>;
  }

  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <div>
      <PostModif22 />
      <div>
        <Trier />
        <p>trier par :</p>
        <select onChange={(e) => handleChange2(e)}>
          <option value="Date_post">par date</option>
          <option value="Titre">par Titre</option>
          <option value="Post_user">par id_user</option>
        </select>

        <button onClick={() => refreshPosts()}> trier par {tri}</button>
        <p>Search: à revoir</p>
        <label>
          Quoi ?:
          <input type="text" name="recherche" placeholder="votre recherche" />
        </label>
        <select onChange={(e) => handleChange3(e)}>
          <option value="33">dans le pseudo</option>
          <option value="Titre">dans le titre</option>
          <option value="Contenu">dans le contenu</option>
        </select>

        <button onClick={() => searchPosts()}> recherche !</button>
      </div>

      <h2>Total Posts :{posts.length} !</h2>

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id} id={"post_G_" + post.Post_id}>
              <hr></hr> <Post2 post={post}></Post2>
            </div>
          );
        })}
    </div>
  );
}

export default ThePost;

//url3 = "http://localhost:3100/api/posts/userId/15";
//pas ok car retours #

/**
 *  value={inputs.username || ""}
              onChange={handleChange}
 */
