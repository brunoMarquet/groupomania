import React, { useState } from "react";
//import * as outils from "./module/postEditer";
//import { UserContext } from "../App";
//import { createPost } from "../../../groupomania_back/v0/controllers/ctrPost";

function PostModif22() {
  const [inputs, setInputs] = useState(
    {
      Titre: "hello",
      Contenu: "Contenu....555",

      Post_visuel: "old_jpeg.jpg",
    }

    //Post_visuel=post.Post_visuel
  );
  const fileInput = React.createRef();

  const [toModif, setToModif] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function createPost22() {
    event.preventDefault();
    console.log("lon ", fileInput.current.files.length);
    if (fileInput.current.files.length > 0) {
      inputs.Post_visuel = fileInput.current.files[0].name;
      // setInputs((inputs.Post_visuel = fileInput.current.files[0].name));
      //ou
      // setInputs( Post_visuel:fileInput.current.files[0].name);
      /*  setInputs((values) => ({
        ...values,
        Post_visuel: fileInput.current.files[0].name,
      })); */
    }

    //inputs.fileInput = false;

    console.log("inputs : ", inputs);
  }
  function test22() {
    // alert(`Fichier sélectionné - ${fileInput}`);
    console.log("file ", fileInput);
  }

  return (
    <div className="modifier_post">
      {toModif ? (
        <div>
          <label>
            <div className="intitule">titre :</div>
            <textarea
              type="text"
              name="Titre"
              placeholder="votre Pseudo"
              value={inputs.Titre || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            <div className="intitule"> texte ! :</div>
            <textarea
              rows="5"
              cols="40"
              type="text"
              name="Contenu"
              placeholder="votre Pseudo"
              value={inputs.Contenu || ""}
              onChange={handleChange}
            />{" "}
          </label>
          <br></br>
          <label>
            Envoyer un fichier: ou garder le {inputs.Post_visuel} ....<br></br>
            <input type="file" ref={fileInput} />
          </label>

          <hr></hr>
          <button onClick={() => createPost22()}> Creer Now</button>
          <button onClick={() => test22()}> test</button>
        </div>
      ) : (
        <div>_</div>
      )}
    </div>
  );
  /* 

  value={inputs.fileInput || ""}
  
  
  */
}
export default PostModif22;
