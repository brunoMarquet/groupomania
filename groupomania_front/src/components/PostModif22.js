import React, { useState, useContext } from "react";
//import * as outils from "./module/postEditer";
import { UserContext } from "../App";
import * as outils from "./module/postEditer";
//import { createPost } from "../../../groupomania_back/v0/controllers/ctrPost";

function PostModif22() {
  const [inputs, setInputs] = useState(
    {}

    //Post_visuel=post.Post_visuel
  );
  const theContext = useContext(UserContext);
  const fileInput = React.createRef();

  const [toModif, setToModif] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function createPost22() {
    //alert(inputs);

    const leToken = theContext.token;
    const idUser = theContext.Id_user;
    if (fileInput.current.files.length > 0) {
      inputs.Post_visuel = fileInput.current.files[0].name;
    }

    console.log("inputs : ", inputs);

    outils.ModCreatePost(idUser, leToken, inputs);
  }

  const annuler = (a) => {
    setToModif(a);
    //console.log(" modifPost2 id " + a);
  };

  return (
    <div className="modifier_post">
      {toModif ? (
        <div>
          <form></form>
          <label>
            <div className="intitule">titre :</div>
            <textarea
              type="text"
              name="Titre"
              placeholder="votre Titre"
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
              placeholder="votre Contenu"
              value={inputs.Contenu || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Envoyer un fichier: ou garder le {inputs.Post_visuel} ....
            <br></br>
            <input type="file" ref={fileInput} />
          </label>
          <label>Select file</label>
          <input id="files" type="file" />
          <button type="submit">Upload</button>

          <i className="fas fa-save"></i>
          <button onClick={() => createPost22()}> Créer Now</button>
          <i className="fas fa-trash"></i>
          <button onClick={() => annuler(false)}> Annuler</button>
        </div>
      ) : (
        <div>
          <i className="fas fa-edit" onClick={() => annuler(true)}></i>{" "}
          ______________
          <button onClick={() => annuler(true)}> New post</button>
        </div>
      )}
    </div>
  );
}
export default PostModif22;

/* 
  

  value={inputs.fileInput || ""}
   Titre: "hello____888",
      Contenu: "Contenu....555",

      Post_visuel: "old_jpeg7.jpg",

      ou : 
       setInputs((inputs.Post_visuel = fileInput.current.files[0].name));
      ou
      // setInputs( Post_visuel:fileInput.current.files[0].name);
        setInputs((values) => ({
        ...values,
        Post_visuel: fileInput.current.files[0].name,
      })); 
  
  */
