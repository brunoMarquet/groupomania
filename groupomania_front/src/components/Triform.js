import { React, useState } from "react";

//import { UserContext } from "../App";

function TriForm2() {
  const [inputs, setInputs] = useState({
    ord: "asc",
    nbrMax: "20",
    matter: "Date_post",
  });

  function trier2() {
    /*
    let ordre = "asc";
    if (document.getElementById("triChoice1").checked) {
      ordre = "desc";
    }
     const tri2 = {
      ord: ordre,
      nbrMax: inputs.nombreChoix,
      // matter: inputs.orderBy,
    }; */
    console.log(inputs.nombreChoix, inputs.orderBy, "inputs: ", inputs);
  }
  /*  const theContext = useContext(UserContext);

  
  
 
  const [reponse, setReponse] = useState({});
  const token = theContext.token;



  const [user, setUser] = useState(oneUser); */

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <button onClick={() => trier2()}> trier !</button>
      <p>
        trier par :
        <select
          name="matter"
          value={inputs.matter || ""}
          onChange={handleChange}
        >
          <option value="Date_post">par date</option>
          <option value="Titre">par Titre</option>
          <option value="Post_user">par id_user</option>
        </select>
        <label>inverser (desc)</label>
        <input type="checkbox" id="triChoice1" name="trisorder1" />
        nombre d item affichés :
        <select
          name="nbrMax"
          value={inputs.nbrMax || "6"}
          onChange={handleChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="200">200 ...</option>
        </select>
        <input
          type="text"
          name="pwd"
          placeholder="votre psw"
          value={inputs.pwd || ""}
          onChange={handleChange}
        />
      </p>
    </>
  );
}
export default TriForm2;

/**
 * 
 * <button onClick={() => outils.findUser(theContext.token)}>
            test 30mai !
          </button>
          theContext.token
 *  {user ? (
        <Bonjour />
      ) : ()
 * 
 * <div>
        ton nom :{reponse.Pseudo} id : {reponse.Id_user}
      </div>
      {reponse.message ? <div> info : {reponse.message} </div> : <div>..</div>}
      {reponse.userPseudo ? (
        <div> QUI : {reponse.userPseudo} </div>
      ) : (
        <div>..</div>
      )}

 */
