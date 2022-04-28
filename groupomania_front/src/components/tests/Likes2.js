import React, { useState } from "react";

function Likes2(props) {
  const likes = props.likes;

  // likes.User_like;
  const userLog = localStorage.getItem("userID");
  //console.log(likes);
  if (likes.length !== 0) {
    //connerie
    // const userLike = likes.User_like;
  }
  // + " : " + userLog);

  //const alterOk = userLike === userLog ? true : false;

  //console.log("likes55", likes.length);

  let depart = likes.length;

  const [count, setCount] = useState(depart);
  return (
    <>
      <h3>il y a {count} likes</h3>

      <button onClick={() => setCount(count + 1)}>j'aime</button>
      <button onClick={() => setCount(count - 1)}>j'aime pas</button>
    </>
  );
}

export default Likes2;
