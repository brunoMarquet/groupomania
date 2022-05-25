import { React, useState, createContext } from "react";
//import Test4 from "./test/Test4";
//import Login2 from "./components/Login2";//
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login2 from "./components/Login2";
import ThePost from "./components/ThePost";
import PostModif22 from "./components/PostModif22";
//import Po

export const UserContext = createContext();

import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function App() {
  let theContext1 = {
    Id_user: 0,
    Pseudo: "Nobody",
    token: false,
    Id_post: 0,
    Id_fonction: "0",
  };

  //ReactSession.set("theContext", theContext1);
  // const sessionContext = ReactSession.get("theContext") ?? theContext1;
  const sessionFonction = ReactSession.get("theFonction") ?? {};
  const sessionContext = theContext1; //prov
  const [theContext, setContext] = useState(sessionContext);

  function TheMain() {
    if (theContext.token) {
      switch (theContext.Id_fonction) {
        case 0:
          return <ThePost />;
        case "postByUser":
          return <ThePost />;

        default:
          console.log(`Sorry, we are out of ${theContext.Id_fonction}.`);
          return <Erreur />;
      }
    } else {
      return <Accueil />;
    }
  }

  // updateCartValue(2);
  return (
    <div>
      <p>Actu : {new Date().toLocaleTimeString()}</p>
      <i className="fas fa-map-marker-alt"> </i>
      <PostModif22 />

      <UserContext.Provider value={theContext}>
        <Header></Header>
        <Login2 theContext={theContext} setContext={setContext} />
        <TheMain />
        <Footer></Footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;

function Accueil() {
  return (
    <div>
      <h2>Accueil!!! Vous n avez pas le TOKEN </h2>Eminuit autem inter humilia
      supergressa iam impotentia fines mediocrium delictorum nefanda Clematii
      cuiusdam Alexandrini nobilis mors repentina; cuius socrus cum misceri sibi
      generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii
      pseudothyrum introducta, oblato pretioso reginae monili id adsecuta est,
      ut ad Honoratum tum comitem orientis formula missa letali omnino scelere
      nullo contactus idem Clematius nec hiscere nec loqui permissus
      occideretur.;
    </div>
  );
}
function Erreur() {
  return (
    <div>
      <h2>EREUR</h2>
      <h2>EREUR</h2>
      <h2>EREUR</h2>
      <h2>EREUR</h2>
      <h2>EREUR</h2>
    </div>
  );
}

/**{theContext.token && theContext.Id_fonction == "0" ? (
          <ThePost />
        ) : (
          <Accueil />
        )}
 *

         
 */
