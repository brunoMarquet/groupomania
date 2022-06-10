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
function DialogApiBodyJson(url, method2, headers2, body2) {
  console.dir(body2);
  return fetch(url, {
    method: method2,
    body: body2,
    headers: headers2,
  })
    .then((res) => res.json())
    .catch(function (error) {
      error;
    });
}

function DialogApi(url, method2, headers2) {
  //let url = "http://localhost:3100/posts";
  return fetch(url, {
    method: method2,
    headers: headers2,
  })
    .then((res) => res.json())
    .catch(function (error) {
      error;
    });
}
export async function requeteSql(leToken, requete) {
  //async function deletePost(leToken, idpost) {
  let url = "http://localhost:3100/api/posts/testBody";
  const method2 = "POST";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApiBody(url, method2, headers2, requete);
  if (res) {
    return res;
  }
}

//async function myLog(nom, psw) {

export const myLog = async (nom, psw) => {
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
  } else {
    return "erreur";
  }
};
//async function mySign(nom, psw) {
export const mySign = async (nom, psw) => {
  const envoiPost = { Pseudo: nom, password: psw };
  let url = "http://localhost:3100/api/users/signUp";

  const method2 = "POST";
  const headers2 = { "Content-Type": "application/json" };

  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  console.log("Sign ?", res);
  return res;
};
function deConnect(idUser) {
  alert("DEBUG deConnect");
  console.log("Sign Raz ?", idUser);
  // ReactSession.remove("token");
  ReactSession.set("uu", idUser);
  console.log("find ", ReactSession.get("uu"));
}
//async function showPosts(leToken, tri) {
export const showPosts = async (leToken, criteres) => {
  //console.log(criteres);
  //const url = "http://localhost:3100/api/comments/";
  let url = "http://localhost:3100/api/posts/choix";
  const method2 = "POST";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, criteres);
  if (res) {
    return res;
  }
};
export const test34 = async (leToken, criteres) => {
  //console.log(criteres);
  //const url = "http://localhost:3100/api/comments/";
  let url = "http://localhost:3100/api/posts/choix1";
  const method2 = "POST";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, criteres);
  if (res) {
    return res;
  }
};

export const modifPost = async (post_id, leToken, envoiPost) => {
  //async function modifPosts(post_id, leToken, envoiPost) {
  // const Visuel2 = inputs.Post_visuel ?? "default.jpg";
  console.log(envoiPost);
  const url = "http://localhost:3100/api/posts/" + post_id;
  const method2 = "PUT";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  if (res) {
    return res;
  }
};
// outils.writeComment(leToken,dataComment);
export const writeComment = async (leToken, dataComment) => {
  let dt = new Date();
  dt.setHours(dt.getHours() + 2);
  console.log("dt: ", dt);
  dataComment.Date_com = new Date();

  console.log("Fonction ", dataComment);

  const url = "http://localhost:3100/api/comments";

  const method3 = "POST";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApiBody(url, method3, headers2, dataComment);
  if (res) {
    console.log("retout comment", res);
    return res;
  }
};
export const modifComment = async (post_Com, leToken, envoiCom) => {
  //async function modifPosts(post_id, leToken, envoiPost) {
  // const Visuel2 = inputs.Post_visuel ?? "default.jpg";
  console.log(envoiCom);
  const url = "http://localhost:3100/api/comments/" + post_Com;
  const method2 = "PUT";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiCom);
  if (res) {
    return res;
  }
};

export const ModCreatePost = async (idUser, leToken, inputs) => {
  //async function ModCreatePost(idUser, leToken, inputs) {
  //const Visuel2 = inputs.Post_visuel ?? "default.jpg";

  const envoiPost = {
    Post_user: parseInt(idUser),
    Titre: inputs.Titre,
    Contenu: inputs.Contenu,
    Date_post: new Date(),
  };
  let url = `http://localhost:3100/api/posts/`;

  const method2 = "POST";

  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  if (res) {
    return res;
  }
};

export const testPost = async (idUser, leToken, inputs) => {
  //async function ModCreatePost(idUser, leToken, inputs) {
  //const Visuel2 = inputs.Post_visuel ?? "default.jpg";

  let url = `http://localhost:3100/api/posts/test`;

  const method2 = "POST";
  const headers2 = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${leToken}`,
  };
  //, bug after..
  const res = await DialogApiBodyJson(url, method2, headers2, inputs);
  if (res) {
    return res;
  }
};

export { deConnect };
