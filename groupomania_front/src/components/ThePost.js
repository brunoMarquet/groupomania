import React from "react";
import Post2 from "./Post2";

import FormPost2 from "./FormPost2";

class GetRequest extends React.Component {
  constructor(props) {
    super(props);
    props.user ? console.log(props.user) : console.log("NO");
    props.url2 ? console.log("url ", props.url2) : console.log("NO");
    /*  const Id_user = props.user;
    console.log("yyyyyyyyyy ", user);
 */
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
        <div className="">Total Posts :{posts.length},</div>

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

/**  <br />
 *  const url2 = props.urlApi;
    console.log("yyyyyyyyyy ", url2);
 * 
 * 
         Id_user {Id_user}
 *  {userLog ? <FormPost2 userLog={userLog} /> : <>Pas identifié</>}
 * <h3 key={user.Id_user} id={user.Id_user}>
                  - {user.Pseudo} mail : {user.Email}
                </h3> */
