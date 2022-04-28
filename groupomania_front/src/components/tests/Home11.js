import { useState, useEffect } from "react";

const Home1 = () => {
  const [data, setData] = useState(null);
  // const lesPosts = await showPosts("http://localhost:3100/posts");
  useEffect(() => {
    fetch("https://localhost:3100/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      hello
      {data &&
        data.map((item) => {
          return <h3 key={item.Titre}>({item.Contenu}</h3>;
        })}
    </>
  );
};

export default Home1;
