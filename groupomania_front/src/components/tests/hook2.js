//import useFetch from "../useFetch";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
const Home = () => {
  //https://jsonplaceholder.typicode.com/posts
  //https://jsonplaceholder.typicode.com/users

  let url = "";

  url = "http://vuesdoptiques.free.fr/data/todo.json";

  url = "../src/data/todo.json";
  url = "./todo2.json";
  url = "https://jsonplaceholder.typicode.com/todos";

  const [data] = useFetch(url);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.title} (user : {item.userId})
            </p>
          );
        })}
    </div>
  );
};
export default Home;
