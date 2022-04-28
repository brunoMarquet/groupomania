import { useState } from "react";

function Car(props) {
  const PRODUCTS = props.PRODUCTS;

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <p>hello</p>
      {PRODUCTS.map((produit) => (
        <div>
          <h3> {produit.name}</h3>
          <p>prix : {produit.price}</p>
        </div>
      ))}
    </>
  );
}

export default Car;
