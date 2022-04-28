import { useState, useEffect } from "react";

const Home1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    //const url = "http://vuesdoptiques.free.fr/data/todo.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <h3 key={item.id}>(={item.title})</h3>;
        })}
    </>
  );
};

export default Home1;
