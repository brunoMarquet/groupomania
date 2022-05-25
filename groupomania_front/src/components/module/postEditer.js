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

function oneTitre(title) {
  document.title = title;
}

function deletePost(idpost) {
  console.log("deletePost ", idpost);
  //app.delete("/posts/:id"
  let url = "http://localhost:3100/api/posts/" + idpost;
  //const method2 = "DELETE";
  const leToken = localStorage.getItem("theToken");

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
function ModCreatePost(idUser, leToken, inputs) {
  const Visuel2 = inputs.Post_visuel ?? "default.jpg";

  const envoiPost = {
    Post_user: parseInt(idUser),
    Titre: inputs.Titre,
    Contenu: inputs.Contenu,
    Post_visuel: Visuel2,

    Date_post: new Date(),
  };

  //const leToken = localStorage.getItem("theToken");

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
        console.log(`post crée ${res.Post_id} , titre...`);
      }
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
  } else {
    return "erreur";
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
  alert("DEBUG deConnect");
  console.log("Sign Raz ?", idUser);
  // ReactSession.remove("token");
  ReactSession.set("uu", idUser);
  console.log("find ", ReactSession.get("uu"));
}
async function showPosts(leToken) {
  let url = "http://localhost:3100/api/posts";
  const method2 = "GET";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}
async function showPostsByUser(userId, leToken) {
  let url = "http://localhost:3100/api/posts/userId/" + userId;
  const method2 = "GET";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}

async function modifPosts(post_id, leToken, envoiPost) {
  /* const envoiPost3 = {
    Titre: "nom888888888888",
    Contenu: "psw8999999999999999999",
  }; */
  let url = "http://localhost:3100/api/posts/" + post_id;
  const method2 = "PUT";

  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  if (res) {
    return res;
  }
}

export {
  showPosts,
  showPostsByUser,
  modifPosts,
  deletePost,
  ModCreatePost,
  myLog,
  mySign,
  oneTitre,
  deConnect,
};
