import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

function DialogApiBody(url, method2, headers2, body2) {
  console.dir(JSON.stringify(body2));
  return fetch(url, {
    method: method2,
    body: JSON.stringify(body2),
    headers: headers2,
  })
    .then((res) => res.json())
    .catch(function (error) {
      error;
    });
}
function DialogApi(url, method2, headers2) {
  //let url = "http://localhost:3100/posts";
  //leToken = "toto";
  return fetch(url, {
    method: method2,

    headers: headers2,
  })
    .then((res) => res.json())
    .catch(function (error) {
      error;
    });
}
async function showPosts() {
  //const IdUser = theUser.Id_user;
  console.log("hi hi const IdUser = theUser.Id_user;");

  let url = "http://localhost:3100/api/posts";
  const method2 = "GET";
  const leToken = "tata";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
    //document.getElementById("lesUsers").innerHTML = editAllPost(res, IdUser);
  }
}

function oneTitre(title) {
  document.title = title;
}

function deletePost(idpost) {
  console.log("deletePost ", idpost);
  //app.delete("/posts/:id"
  let url = "http://localhost:3100/api/posts/" + idpost;
  const method2 = "DELETE";
  const leToken = localStorage.getItem("theToken");
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };

  let texte = "";

  fetch(url, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${leToken}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch(function (error) {
      alert(error);
    });

  //const res = await DialogApi(url, method2, headers2);
}
function createPost(IdUser) {
  const title = document.getElementById("theTitle").value;
  const texte = document.getElementById("theText").value;

  const envoiPost = {
    Post_user: parseInt(IdUser),
    Titre: title,
    Contenu: texte,
    Date_post: new Date(),
  };

  const leToken = localStorage.getItem("theToken");

  let url = `http://localhost:3100/api/posts/`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(envoiPost),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${leToken}`,
    },
  })
    .then((res) => res.json())

    .then((res) => {
      console.log(res);
      if (res.Post_id) {
        alert(`post crée ${res.Post_id} titre...`);
      }
      //return res;
    })
    .catch(function (error) {
      alert(error);
    });
}

async function myLog(nom, psw) {
  //console.log("hello :" + nom);
  //const envoiPost = { Pseudo: "sophie", password: "111" };
  const envoiPost = { Pseudo: nom, password: psw };
  let url = "http://localhost:3100/api/users/login";
  //url = "http://localhost:3100/loginTest";
  const method2 = "POST";
  const headers2 = { "Content-Type": "application/json" };
  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  if (res) {
    console.log("log ?", res);
    return res;
    //document.getElementById("lesUsers").innerHTML = afficheRes();
  }
}
async function mySign(nom, psw) {
  const envoiPost = { Pseudo: nom, password: psw };
  let url = "http://localhost:3100/api/users/signUp";

  const method2 = "POST";
  const headers2 = { "Content-Type": "application/json" };

  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  console.log("Sign ?", res);
  return res;
}
function deConnect(idUser) {
  console.log("Sign Raz ?", idUser);
  // ReactSession.remove("token");
  ReactSession.set("uu", idUser);
  console.log("find ", ReactSession.get("uu"));
}

export {
  showPosts,
  deletePost,
  createPost,
  myLog,
  mySign,
  oneTitre,
  deConnect,
};
