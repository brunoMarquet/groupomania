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
export async function deletePost(leToken, idpost) {
  //async function deletePost(leToken, idpost) {
  let url = "http://localhost:3100/api/posts/" + idpost;
  const method2 = "DELETE";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}
// outils.write(leToken,idPost, idUser);
export async function deleteLike(leToken, idpost) {
  //console.log(leToken, idpost);
  let url = "http://localhost:3100/api/likes/" + idpost;
  const method2 = "DELETE";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}
export async function deleteComment(leToken, idComment) {
  console.log("del", idComment);

  let url = "http://localhost:3100/api/comments/" + idComment;
  const method2 = "DELETE";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}
export const addLike = async (leToken, envoiLike) => {
  //async function addLike(leToken, envoiLike) {
  //console.log(envoiLike);

  // let url = `http://localhost:3100/api/posts/like`;
  let url = `http://localhost:3100/api/likes`;

  const method2 = "POST";
  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiLike);
  if (res) {
    return res;
  }
};

async function findUser(leToken) {
  alert(leToken);
  /* //pas ope !
  let url = "http://localhost:3100/api/user/tous/";
  const method2 = "get";
  const headers2 = {
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    console.log(res);
    return res;
  }*/
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
export const showPostsByUser = async (userId, leToken) => {
  //async function showPostsByUser(userId, leToken) {
  let url = "http://localhost:3100/api/posts/userId/" + userId;
  const method2 = "GET";
  const headers2 = {
    //"Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
};

async function searchPostTxt(leToken, envoiPost) {
  // a revoir
  let url = "http://localhost:3100/api/posts/searchTxt/";
  const method2 = "PUT";
  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApiBody(url, method2, headers2, envoiPost);
  if (res) {
    console.log(res);
    return res;
  }
}

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

/**bof */
function oneTitre(title) {
  document.title = title;
}
function sqlToJsDate(sqlDate) {
  //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
  var sqlDateArr1 = sqlDate.split("-");
  //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
  var sYear = sqlDateArr1[0];
  var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
  var sqlDateArr2 = sqlDateArr1[2].split(" ");
  //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
  var sDay = sqlDateArr2[0];
  var sqlDateArr3 = sqlDateArr2[1].split(":");
  //format of sqlDateArr3[] = ['hh','mm','ss.ms']
  var sHour = sqlDateArr3[0];
  var sMinute = sqlDateArr3[1];
  var sqlDateArr4 = sqlDateArr3[2].split(".");
  //format of sqlDateArr4[] = ['ss','ms']
  var sSecond = sqlDateArr4[0];
  var sMillisecond = sqlDateArr4[1];

  const d = new Date(
    sYear,
    sMonth,
    sDay,
    sHour,
    sMinute,
    sSecond,
    sMillisecond
  );
  return d.getDate(), "_==", d.getDay(), "==", d.getHours();
}

export { searchPostTxt, oneTitre, deConnect, findUser, sqlToJsDate };
//

/**
   *  mySign,
   POur create Comment
   * const dataComment2 = {
    User_com: 21,
    Post_com: 104,
    Text_com: "1123uuuuuuuuuu",
    Date_com: new Date(),
    Visuel_com: "",
  };
   * 
  25 let datas = req.body;
  26 console.log("createComment", datas);
  27 try {
→ 28   const newPost = await prisma.comments.create({
         data: {
           User_com: 21,
           Post_com: 104,
           Text_com: '1123uuuuuuuuuu',
       +   Visuel_com: String,
       ?   Id_com?: Int,
       ?   Date_com?: DateTime | null,
       ?   published?: Boolean | null
         }
       })
   */

//
