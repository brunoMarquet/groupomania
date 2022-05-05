import { useState } from "react";
import logo from "../assets/logoGroupo.png";
import "../styles/login.css";

import * as outils from "../components/module/postEditer";
import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function Login2() {
  const [inputs, setInputs] = useState({});
  const [reponse, setReponse] = useState({});

  const oneUser = ReactSession.get("user") ?? {};

  // { Pseudo: "1001", password: "1001" };
  //ReactSession.get("user") ?? {};
  const [user, setUser] = useState(oneUser);
  //const [isLogin, setIsLogin] = useState(0);
  //const [token, setToken] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function raz2() {
    localStorage.clear();
    //ReactSession.set("user", {});
    ReactSession.remove("user");
    setUser(0);
    setReponse({ message: "truc RAZ" });
  }

  function truc22() {
    const oneUser = { userPseudo: "1001", truc5555: "1001" };
    ReactSession.set("user", oneUser);
    setUser(oneUser);
    setReponse(oneUser);
  }
  function sign2() {
    const lePsw = inputs.pwd;
    const username = inputs.username;
    console.log(username + "_pass_" + lePsw);
    if (username !== "" && lePsw !== "") {
      outils
        .mySign(username, lePsw)
        .then((retour) => {
          //console.log("rr", retour["person"]);
          //setUser(oneUser);
          setReponse(retour);
          //setIsLogin(retour[person]);
        })
        .catch((error) => res.status(400).json({ error }));
    } else {
      alert("Merci de remplir les cases");
    }
  }
  function theLog() {
    const lePsw = inputs.pwd;
    const username = inputs.username;
    console.log(username + "_pass_" + lePsw);
    if (username !== "" && lePsw !== "") {
      outils
        .myLog(username, lePsw)
        .then((retour) => {
          // console.log("rr", retour["person"]);
          setReponse(retour);
          //setIsLogin(retour[person]);
        })
        .catch((error) => res.status(400).json({ error }));
    } else {
      alert("Merci de remplir les cases");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {user.userPseudo ? (
        <div>
          <div>Bonjour {user.Pseudo} !</div>

          <button onClick={(event) => theLog()} value=" ">
            se deconnecter
          </button>
          <button onClick={(event) => raz2()} value=" ">
            RAZ
          </button>
        </div>
      ) : (
        <div>
          <label>
            Enter your Pseudo:
            <input
              type="text"
              name="username"
              placeholder="votre Pseudo"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your pwd:
            <input
              type="text"
              name="pwd"
              placeholder="votre psw"
              value={inputs.pwd || ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={(event) => sign2()} value=" ">
            s'inscrire
          </button>
          <button onClick={(event) => login2()} value=" ">
            se loger
          </button>
          <button onClick={(event) => truc22()} value=" ">
            test
          </button>
          <button onClick={(event) => raz2()} value=" ">
            RAZ
          </button>
        </div>
      )}

      <div> message: {JSON.stringify(reponse)}</div>
    </div>
  );
}
export default Login2;

/**
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
