import { useState } from "react";
import * as outils from "./module/postEditer";

function Form2() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function echo22(type) {
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
  }
  function Component5({ user }) {
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <label>
        Enter your Pseudo:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your pwd:
        <input
          type="text"
          name="pwd"
          value={inputs.pwd || ""}
          onChange={handleChange}
        />
      </label>
      <button onClick={(event) => echo22("S")} value=" ">
        s'inscrire
      </button>
      <button onClick={(event) => echo22("L")} value=" ">
        se loger
      </button>
    </div>
  );
}
export default Form2;
