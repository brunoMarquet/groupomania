import { React, useState, useEffect, useContext } from "react";

import Post2 from "./Post2";
import * as outils from "./module/postEditer";
import { UserContext } from "../App";

//import FormPost2 from "./FormPost2";

function ThePost() {
  /* props.user ? console.log(props.user) : console.log("NO");
  props.token ? console.log("token ", props.token) : console.log("NO"); */

  const [posts, setPosts] = useState([]);
  const [tri, setTri] = useState("par date");
  const theContext = useContext(UserContext);
  const token2 = theContext.token;

  const handleChange = (e) => {
    //alert(e.target.value);
    setTri(e.target.value);
    console.log("choix  ", tri);
  };

  function refreshPosts() {
    if (theContext.Id_fonction == 0) {
      outils.showPosts(token2, "Titre").then((data) => setPosts(data));
      //Post_user,,Date_post
    }
    if (theContext.Id_fonction == "postByUser") {
      const Id_user = theContext.Id_user;
      outils.showPostsByUser(Id_user, token2).then((data) => setPosts(data));
    }
  }

  useEffect(() => {
    refreshPosts();
  }, []);

  return (
    <div>
      <div>
        <p>Choose le tri :</p>
        <select onChange={(e) => handleChange(e)}>
          <option value="Date_post">par date</option>
          <option value="Titre">par Titre</option>
          <option value="Post_user">par id_user</option>
        </select>
        <p>votre choix : {tri}</p>
      </div>

      <h2>Total Posts :{posts.length} !</h2>

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id} id={"post_G_" + post.Post_id}>
              <hr></hr> <Post2 post={post} refreshPosts={refreshPosts}></Post2>
            </div>
          );
        })}
    </div>
  );
}

export default ThePost;

//url3 = "http://localhost:3100/api/posts/userId/15";
//pas ok car retours #
