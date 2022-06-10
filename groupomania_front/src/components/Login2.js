import { React, useState, useContext } from "react";

import "../styles/login.css";

import * as outils from "./module/postEditer";
import { ReactSession } from "react-client-session";
import { UserContext } from "../App";
//import { UserContext } from "../App";

ReactSession.setStoreType("localStorage");

function Login2(props) {
  const theContext = useContext(UserContext);
  //??
  const [inputs, setInputs] = useState({
    username: "1001",
    pwd: "1001",
  });
  const [reponse, setReponse] = useState({});
  const token = theContext.token;

  //const Id_user = theContext.Id_user;

  //const

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
  function myPosts() {
    // outils.showPostsByUser(Id_user, token);
    props.setContext({
      ...props.theContext,
      Id_fonction: "postByUser",
    });
  }

  function raz2() {
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

  function ContextSign(retour) {
    const theContext3 = {
      ...props.theContext,
      Pseudo: retour.user.userPseudo,
      Id_user: retour.user.userId,
      Id_fonction: 0,
      token: retour.token,
    };
    props.setContext(theContext3);

    ReactSession.set("theContext", theContext3);

    // a modif
    setUser(retour.user);
    setReponse(retour.message);
  }
  function sign2() {
    const lePsw = inputs.pwd;
    const username = inputs.username;
    console.log(username + "_pass_" + lePsw);
    if (username !== "" || lePsw !== "") {
      outils
        .mySign(username, lePsw)
        .then((retour) => {
          ContextSign(retour);
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
      // console.log(user, "AA", token);
      // <p>{console.log(token}</p>;

      return (
        <div>
          Admin : {token}
          <button onClick={() => raz2(user.Id_user)}>se déconnecter!</button>
          <button onClick={() => myPosts()}>mes posts!</button>
        </div>
      );
    } else {
      return (
        <div>
          <div>Bonjour {user.userPseudo} !</div>
          <button onClick={() => raz2(user.Id_user)}>se déconnecter!</button>
          <button onClick={() => shoot2(user.Id_user)}>
            NON_modifier mes infos!
          </button>
          <button onClick={() => myPosts()}>mes posts!</button>
          <button onClick={() => shoot2(user.Id_user)}>
            NON_mes commentaires!
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
          ContextSign(retour);
          /* const theContext3 = {
            ...props.theContext,
            Pseudo: retour.user.userPseudo,
            Id_user: retour.user.userId,
            token: retour.token,
          };
          props.setContext(theContext3);

          ReactSession.set("theContext", theContext3);

          setUser(retour.user);
          setReponse(retour.message); */
        })
        .catch((error) => console.log(error));
    } else {
      alert("Merci de remplir les cases");
      //setReponse("Merci de remplir les cases");
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

          <button className="bt_log" onClick={() => sign2()} value=" ">
            INSCRIPTION
          </button>
          <button className="bt_log" onClick={() => theLog()} value=" ">
            CONNECTION
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
