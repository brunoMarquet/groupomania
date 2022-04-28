// Display posts in React

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`/https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <>
        {data &&
          data.map((item) => {
            return <h3 key={item.id}>(={item.title})</h3>;
          })}
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

/* export default function App() {
  componentDidMount();
  {
    fetch("/https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }
  return (
    <ul>
      {this.state.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
 */
