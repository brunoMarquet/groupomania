import { React, useState, createContext } from "react";
//import Test4 from "./test/Test4";
//import Login2 from "./components/Login2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login2 from "./components/Login24";
import ThePost from "./components/ThePost";

export const UserContext = createContext();

import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function App() {
  let theContext1 = {
    Id_user: 0,
    Pseudo: "leon",
    token: false,
    Id_post: 0,
    Id_fonction: "0",
  };

  const [theContext, setContext] = useState(theContext1);

  // updateCartValue(2);
  return (
    <div>
      <p>Actu : {new Date().toLocaleTimeString()}</p>

      <UserContext.Provider value={theContext}>
        <Header></Header>
        <Login2 theContext={theContext} setContext={setContext}></Login2>
        {theContext.token ? <ThePost /> : <Accueil />}
        <Footer></Footer>
      </UserContext.Provider>
    </div>
  );
}

export default App;

function Accueil() {
  return (
    <div>
      <h2>Accueil</h2>Eminuit autem inter humilia supergressa iam impotentia
      fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis
      mors repentina; cuius socrus cum misceri sibi generum, flagrans eius
      amore, non impetraret, ut ferebatur, per palatii pseudothyrum introducta,
      oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum
      comitem orientis formula missa letali omnino scelere nullo contactus idem
      Clematius nec hiscere nec loqui permissus occideretur.;
    </div>
  );
}

/**
 *
 */
