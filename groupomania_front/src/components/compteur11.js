import React, { useState } from "react";

function Compteur(props) {
  let depart = 0;
  if (props.cpt) {
    depart = props.cpt;
  }

  const [count, setCount] = useState(depart);
  return (
    <>
      <hr></hr>
      <p>likes {count}</p>
      <button onClick={() => setCount(count + 1)}>j'aime</button>
      <button onClick={() => setCount(count - 1)}>j'aime pas</button>
    </>
  );
}

export default Compteur;
