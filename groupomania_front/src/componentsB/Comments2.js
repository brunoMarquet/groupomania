import { React, useState, useEffect } from "react";
import Comment2 from "./Comment2";
import PostComment from "./PostComment";
//let tab2= props.comments

function Comments2(props) {
  const [comments, setComments] = useState(props.comments);

  useEffect(() => {
    setComments(props.comments);
  }, [comments]);

  function simpleComment(comment) {
    comment.pseudo = comment.persons.Pseudo;
    delete comment.persons;
    return comment;
  }

  function addComment(newCom) {
    console.log("add ", newCom);
    //setComments(...comments, newCom);
  }
  /*
  function TEST_3_6() {
    const truc = {
      Date_com: "2022-06-03T19:12:11.000Z",
      Id_com: 3143,
      Post_com: 121,
      Text_com: "don juan",
      User_com: 21,
      Visuel_com: "",
      published: null,
    };
    setComments((comments) => [...comments, truc]);
    // setComments(...comments, truc);
  }

  const removeItem = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  }; */

  /*;
 <h3>You have {comments.length} commentaires.</h3>
 setComments={setComments} 

   <button onClick={() => TEST_3_6()}>TEST 3 juin ?</button>
      <button onClick={() => removeItem(143)}>TEST 3 juin Delete?</button>
  
*/
  return (
    <div className="">
      <hr></hr>
      <PostComment postId={props.postId} addComment={addComment} />
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.Id_com}>
              <Comment2 comment={simpleComment(comment)} />
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
