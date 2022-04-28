import { useState } from "react";
import { createPortal } from "react-dom";
import InStock from "./InStock";

function PostEdit(props) {
  const PRODUCTS = props.PRODUCTS;
  const heure = new Date().toLocaleTimeString();

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  function StockOk(props) {
    const produit = props.produit;
    let isLoggedIn = false;

    // console.log(produit.name);

    /* if (InStock === true) {
      console.log(yes); 
      <h3> {produit.name}</h3>
        <p>prix : {produit.price}</p>
      */
    return (
      <div>
        <h1>Bienvenue !</h1>
        L’utilisateur <b>
          {isLoggedIn ? "est actuellement" : "n’est pas"}
        </b>{" "}
        connecté.
        <InStock />
      </div>
    );
    /*} else {
      <p>NO Article</p>;
       <StockOk props={produit} />
    }*/
  }

  return (
    <>
      <p>hello</p>
      <div>
        {PRODUCTS.map((produit) => (
          <div>
            <h3> {produit.name}</h3>
            <p>prix : {produit.price}</p>
            alors{" "}
            <b>
              {produit.stocked
                ? "est actuellementNote that the development build is not optimized To create a production build, use npm run buil"
                : "n’est pas" + heure}
            </b>
            <hr />
            <b>
              {produit.stocked
                ? "est actuellementNote that the development build is not optimized To create a production build, use npm run buil"
                : "titi"}
            </b>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostEdit;
