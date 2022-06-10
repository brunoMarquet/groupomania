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
  /*  const dd = "2022-06-02 22:59:04";
  console.log("DDDDDDDDDD ", outils.sqlToJsDate(dd)); */

  function createPostSimple(event) {
    event.preventDefault();
    // const formData = new FormData();
    const leToken = theContext.token;
    const idUser = theContext.Id_user;
    let formData = new FormData(document.getElementById("form1"));
    //dataPost.
    if (fileInput.current.files.length > 0) {
      // console.log(fileInput.current.files);
      // inputs.Post_visuel = fileInput.current.files[0].name;

      formData.append("File", fileInput.current.files[0]);
    }

    console.log("inputs : ", formData);

    outils.testPost(idUser, leToken, formData);
  }
  function createPost23(event) {
    event.preventDefault();

    const leToken = theContext.token;
    const idUser = theContext.Id_user;
    const formData = new FormData(form1);

    outils.testPost(idUser, leToken, formData);
  }

  function createPost22(event) {
    //alert(inputs);
    event.preventDefault();
    const formData = new FormData();
    const leToken = theContext.token;
    const idUser = theContext.Id_user;
    //let dataPost = new FormData(document.getElementById("form1"));
    //dataPost.
    if (fileInput.current.files.length > 0) {
      // console.log(fileInput.current.files);
      // inputs.Post_visuel = fileInput.current.files[0].name;

      formData.append("File", fileInput.current.files[0]);
      formData.append("Titre55", "titi");
      formData.append("Titre", inputs.Titre);
      //console.log("trrr44", "inputs.T);
    }

    console.log("inputs : ", formData[0]);

    outils.testPost(idUser, leToken, formData);
  }

  const annuler = (a) => {
    setToModif(a);
    //console.log(" modifPost2 id " + a);
  };

  return (
    <div className="modifier_post">
      {toModif ? (
        <form id="form1">
          <div>
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
              <div className="intitule"> texte :</div>
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
            </label>
            Picture:{" "}
            <input
              type="file"
              ref={fileInput}
              name="picture"
              accept="image/*"
            />
            <i className="fas fa-save"></i>
            <button onClick={(event) => createPost23(event)}> Créer Now</button>
            <hr></hr>
            <button onClick={(event) => createPostSimple(event)}>
              {" "}
              Créer simple
            </button>
            <button onClick={() => annuler(false)}> Annuler</button>
          </div>
        </form>
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
<form
        // ref="uploadForm"
        id="uploadForm"
        // action="http://localhost:8000/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="sampleFile" />
        YES
        <input type="submit" value="Upload!" />
        NO
      </form>
  

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
