async function List2() {
  let lesPosts = [];
  lesPosts = showPosts("http://localhost:3100/posts").then(
    console.log(lesPosts)
  );

  return (
    <div>
      {/* {lesPosts.map((post) => (
        <p> {post.Titre}</p>
      ))} */}
    </div>
  );
}
function showPosts(url) {
  //let url = "http://localhost:3100/posts";

  return fetch(url, { method: "GET" })
    .then((res) => res.json())

    .catch(function (error) {
      //document.getElementById("lesUsers").innerHTML = error;
      ///return error;
    });
}
export default List2;
