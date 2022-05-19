import { React, useState, useEffect } from "react";
import Comment2 from "./Comment2";

function Comments2(props) {
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    setComments(props.comments);
    console.log("modif  comments");
  }, [comments]);

  /*;
 <h3>You have {comments.length} commentaires.</h3>
 
*/
  return (
    <div className="">
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.Id_com}>
              <Comment2 comment={comment} />
            </div>
          );
        })}
    </div>
  );
}

export default Comments2;

//url3 = "http://localhost:3100/api/posts/userId/15";
//pas ok car retours #
/**
 * 
 *  <div className="">Total Posts :{posts.length},</div>

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.Post_id}>
              <hr></hr> <Post2 post={post}></Post2>
            </div>
          );
        })}
 * 
 */
