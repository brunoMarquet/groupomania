import { React, useState } from "react";

import "../styles/login.css";

import * as outils from "./module/postEditer";
import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function Login2(props) {
  const [inputs, setInputs] = useState({});
  const [reponse, setReponse] = useState({});

  const oneUser = ReactSession.get("user") ?? false;

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
  function raz2(id) {
    //localStorage.clear();
    //ReactSession.set("user", {});

    ReactSession.remove("user");
    ReactSession.remove("token");
    setInputs({ username: "" });
    setUser(false);
    setReponse(" Vous etes déconnecté");
    props.setContext({
      ...props.theContext,
      Pseudo: 0,
      Id_user: 0,
      token: false,
    });
  }
  function shoot2(a) {
    console.log("55 ", a);
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
          ReactSession.set("user", retour.user);
          ReactSession.set("token", retour.token);
          setUser(retour.user);
          setReponse(retour.message);
        })
        .catch((error) => console.log(error));
    } else {
      alert("Merci de remplir les cases");
    }
  }

  function Bonjour() {
    //isAdmin: "5iXZqzBLs1ca
    //if (user.userPseudo && user.Id_user) {
    if (user.isAdmin) {
      console.log("AA");
      return (
        <div>
          Admin
          <button onClick={() => raz2(user.Id_user)}>se déconnecter!</button>
        </div>
      );
    } else {
      return (
        <div>
          <div>Bonjour {user.userPseudo} !</div>
          <button onClick={() => raz2(user.Id_user)}>se déconnecter!</button>
          <button onClick={() => shoot2(user.Id_user)}>
            modifier mes infos!
          </button>
          <button onClick={() => shoot2(user.Id_user)}>mes posts!</button>
          <button onClick={() => shoot2(user.Id_user)}>
            mes commentaires!
          </button>
        </div>
      );
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
          props.setContext({
            ...props.theContext,
            Pseudo: retour.user.userPseudo,
            Id_user: retour.user.userId,
            token: retour.token,
          });
          ReactSession.set("user", retour.user);
          ReactSession.set("token", retour.token);

          setUser(retour.user);
          setReponse(retour.message);
        })
        .catch((error) => console.log(error));
    } else {
      //alert("Merci de remplir les cases");
      setReponse("Merci de remplir les cases");
    }
  }

  return (
    <div>
      {user ? (
        <Bonjour />
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
          <button onClick={() => sign2()} value=" ">
            s inscrire
          </button>
          <button onClick={() => theLog()} value=" ">
            se loger
          </button>
          <button onClick={() => truc22()} value=" ">
            test
          </button>
          <button onClick={() => raz2()} value=" ">
            RAZ ? debug?
          </button>
        </div>
      )}

      <div> message: {JSON.stringify(reponse)}</div>
    </div>
  );
}
export default Login2;

/**
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
