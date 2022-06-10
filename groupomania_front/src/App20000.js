/* import logo from "./assets/logoGroupo.png";
import Bonjour from "./tests/Bonjour";

import Login from "./Truc";
import UserInfo from "./tests/UserInfo"; */
import Login2 from "./components/Login2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User2 from "./components/User2";

import AllPost from "./components/AllPost";
//import Test32 from "./components/tests/Test32";
//import List2 from "./components/list2";
//import Test31 from "./tests/Test31";
//let lePanier = JSON.parse(localStorage.getItem("panier")) ?? {}};

//modules
import * as ModulePost from "./components/module/postEditer";

import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

ReactSession.set("action", "findAll");
//ReactSession.remove("action");

const action = ReactSession.get("action") ?? 0;

let unuser = {
  Id_user: 11,
  Pseudo: "Léa",
  Email: "Léa@mannia.fr",
  PassWord: "100",
  Visuel_user: null,
  isAdmin: null,
  isActif: null,
};

ReactSession.set("user", unuser);
unuser = {};
const oneUser = ReactSession.get("user") ?? 0;

function Choice() {
  switch (action) {
    case "findAll":
      console.log("Oranges are $0.59 a pound.");
      return <AllPost Id_user={oneUser.Id_user} />;
    // break;
    case 0:
      console.log("Oranges are $0.59 a pound.");
      return <>PROBLEeme </>;

    default:
      console.log(`Sorry, we are out of `);
      return <Erreur />;
  }
}

function LoginTest() {
  const theToken = 1; //ReactSession.get("token");
  //const theuser = 1; //ReactSession.get("user");

  if (theToken) {
    let props = {
      user: oneUser,
      type: "userConnect",
    };

    return (
      <>
        <User2 {...props} />
        {/* <AllPost Id_user={unuser.Id_user} /> */}
        <Choice />
      </>
    );
  } else {
    return (
      <>
        <Login2 />
      </>
    );
  }
}
function Erreur() {
  return (
    <>
      <h1>erreur !!!!!!!</h1>
      <h1>erreur !!!!!!!</h1>
      <h1>erreur !!!!!!!</h1>
      <h1>erreur !!!!!!!</h1>
      <h1>erreur !!!!!!!</h1>
      <h1>erreur !!!!!!!</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <Header></Header>

      <p>hello </p>
      <LoginTest />
      <Footer></Footer>
    </div>
  );
}

export default App;
