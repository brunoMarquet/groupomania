import Bonjour from "./tests/Bonjour";

import Login from "./Truc";
import UserInfo from "./tests/UserInfo";
import Form2 from "./Form2";

//modules
import * as ModulePost from "./module/postEditer";

//import Home1 from "./test/Home1";

/* function instorage() {
  const unGus = {
    id: "11",
    nom: "Sophie",
    mail: "sophie@mannia.fr",
    pwd: "123",
  };
  

  localStorage.setItem("TheUser", JSON.stringify(unGus));
} */

function Body(props) {
  // instorage();
  //let titi = { id: "11", nom: "Sophie", mail: "Sophie@mannia.fr", pwd: "111" };
  /**
   *   <List2></List2> <Bonjour PRODUCTS={PRODUCTS} />
   */
  ModulePost.oneTitre("Gruopo forum");

  /*  const lesPosts = await showPosts("http://localhost:3100/posts");
  console.log(lesPosts); */

  const theUser = JSON.parse(localStorage.getItem("TheUser"));

  if (theUser) {
    return (
      <div>
        <Form2></Form2>
        <hr />
        <UserInfo theUser={theUser} />
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
//
export default Body;
