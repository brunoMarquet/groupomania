import { React, useState } from "react";

//import { UserContext } from "../App";

function TriForm2(props) {
  const [inputs, setInputs] = useState({
    ord: "ASC",
    nbrMax: "20",
    matter: "Date_post",
  });

  function trier2() {
    props.setTri(inputs);
    props.refreshPosts();
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
    // console.log("inputs: ", inputs);
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
        nombre d item affichés :
        <select name="ord" value={inputs.ord || ""} onChange={handleChange}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </p>
      <button onClick={() => trier2()}> trier !</button>
    </>
  );
}
export default TriForm2;

/** search!!...
        <input
          type="text"
          name="pwd"
          placeholder="votre recherche"
          value={inputs.search || ""}
          onChange={handleChange}
        />
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
