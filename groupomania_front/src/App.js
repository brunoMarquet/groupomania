import Header from "./components/Header";
import Footer from "./components/Footer";
import ThePost from "./components/ThePost";

import * as outils from "./module/postEditer";
import { ReactSession } from "react-client-session";

export default function App({ name, callback }) {
  //localStorage.clear();
  //const oneUser = ReactSession.get("user") ?? {};
  const oneUser = ReactSession.get("user");
  let props = {
    user: "oneUser Titi2222",
    url2: "http://localhost:3100/api/posts",
  };

  return (
    <div ref={callback}>
      <Header></Header>
      <ThePost {...props}></ThePost>*<Footer></Footer>
    </div>
  );
}

/***  
 *  <h1>{name}</h1> <ThePost user="Tarzan"></ThePost>
 * const oneUser = ReactSession.get("user");
  let props = {
    user: "oneUser Titi2222",
    urlApi: "http://localhost:3100/api/posts",
  };

  <ThePost {...props}></ThePost>
 * 
 *
 *  {oneUser ? <ThePost /> : <div>Rien</div>} 
     
 */
