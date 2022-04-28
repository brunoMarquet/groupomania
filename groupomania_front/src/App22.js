import React from "react";
import Post2 from "./components/Post2";
import CreatePost2 from "./components/CreatePost2";
import FormPost2 from "./components/FormPost2";
//import Post2 from "./components/Post2";
//import CreatePost2 from "./components/CreatePost2";

//localStorage.setItem("userID", 11);
//localStorage.setItem("theToken", "titi___5");

const userLog = localStorage.getItem("userID");
class GetRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3100/api/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="">
        <div className="">Total Posts :{posts.length}</div>
        {userLog ? <FormPost2 userLog={userLog} /> : <>Pas identifié</>}

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
}

export default GetRequest;

/** <h3 key={user.Id_user} id={user.Id_user}>
                  - {user.Pseudo} mail : {user.Email}
                </h3> */
