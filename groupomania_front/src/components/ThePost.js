import { React, useState, useEffect } from "react";
import Post2 from "./Post2";

//import FormPost2 from "./FormPost2";

function ThePost(props) {
  props.user ? console.log(props.user) : console.log("NO");
  props.token ? console.log("token ", props.token) : console.log("NO");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url3 = "";
    url3 = "http://localhost:3100/api/posts";
    fetch(url3)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="">
      <h2>Total Posts :{posts.length} !</h2>

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
