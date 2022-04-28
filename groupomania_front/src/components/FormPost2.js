import { useState } from "react";
import * as outils from "./module/postEditer";

function FormPost2(props) {
  const [inputs, setInputs] = useState({});
  const userLog = props.userLog;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const shoot2 = (user) => {
    const theTitle = inputs.theTitle;
    const theText = inputs.theText;
    if (theTitle && theText) {
      if (theTitle !== "" && theText !== "") {
        console.log(`titre:${theTitle}, trxt: ${theText} creer par id ${user}`);

        outils.createPost(user);
      }
    }
  };

  /* function echo22(type) {
    const lePsw = inputs.pwd;
    const username = inputs.username;

    console.log(type + "type ", username + "_pass_" + lePsw);
    if (username !== "" && lePsw !== "") {
      if (type === "L") {
        outils.myLog(username, lePsw);
      } else {
        //(type === "S"
        outils.mySign(username, lePsw);
      }
    } else {
      alert("Merci de remplir les cases");
    }
  } */

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <label>
        Enter votre titre:
        <textarea
          type="text"
          name="theTitle"
          rows="5"
          cols="40"
          id="theTitle"
          value={inputs.theTitle || "titre.."}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Enter your ontenu:
        <textarea
          type="text"
          name="theText"
          id="theText"
          value={inputs.theText || "votre texte..."}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={(event) => shoot2(userLog)}>___créer Post__!</button>
      <div id="message">message ??? </div>
    </div>
  );
}
export default FormPost2;
