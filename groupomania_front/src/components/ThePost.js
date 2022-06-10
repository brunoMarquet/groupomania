import { React, useState, useEffect, useContext } from "react";

import Post2 from "./Post2";
import PostModif22 from "./PostModif22";
import TriFormn from "./Triform";
import * as outils from "./module/postEditer";
import { UserContext } from "../App";

//import FormPost2 from "./FormPost2";

function ThePost() {
  /* props.user ? console.log(props.user) : console.log("NO");
  props.token ? console.log("token ", props.token) : console.log("NO"); */
  //const [tri, setTri] = useState("Date_post");
  const [posts, setPosts] = useState([]);

  const theContext = useContext(UserContext);
  const token2 = theContext.token;

  function searchPosts() {
    outils.searchPostTxt(token2, { Titre: "Boulevard" });
  }

  function refreshPosts() {
    if (theContext.Id_fonction == 0) {
      const tri = { ord: "asc", nbrMax: "20", matter: "Date_post" };
      outils.showPosts(token2, tri).then((data) => setPosts(data));
      //Post_user,,Date_post
    }
    if (theContext.Id_fonction == "postByUser") {
      const Id_user = theContext.Id_user;
      outils.showPostsByUser(Id_user, token2).then((data) => setPosts(data));
    }
  }
  function Trier() {
    return <>coco ??</>;
  }

  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <div>
      <TriFormn refreshPosts={refreshPosts} />
      <PostModif22 />
      <div>
        <Trier />

        <p>Search: à revoir</p>
        <label>
          Quoi ?:
          <input type="text" name="recherche" placeholder="votre recherche" />
        </label>

        <button onClick={() => searchPosts()}> recherche !</button>
      </div>

      <h2>Total Posts : {posts.length} !</h2>

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id}>
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
 * id={"post_G_" + post.Post_id}
 * 
 *  value={inputs.username || ""}
              onChange={handleChange}
 */
