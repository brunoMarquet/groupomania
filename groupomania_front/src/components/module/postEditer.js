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
  return fetch(url, {
    method: method2,
    headers: headers2,
  })
    .then((res) => res.json())
    .catch(function (error) {
      error;
    });
}

async function deletePost(leToken, idpost) {
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
  console.log(leToken, idpost);
}
async function addLike(leToken, envoiLike) {
  console.log(envoiLike);
  //api/likes
  let url = `http://localhost:3100/api/posts/like`;

  const method2 = "POST";
  const headers2 = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };

  const res = await DialogApiBody(url, method2, headers2, envoiLike);
  if (res) {
    return res;
  }
}

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
async function showPosts(leToken, tri) {
  let url = "http://localhost:3100/api/posts/" + tri;
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
    //"Content-Type": "application/json",
    Authorization: `Bearer ${leToken}`,
  };
  const res = await DialogApi(url, method2, headers2);
  if (res) {
    return res;
  }
}

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

async function modifPosts(post_id, leToken, envoiPost) {
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
}
// outils.writeComment(leToken,dataComment);

async function writeComment(leToken, dataComment) {
  let dt = new Date();
  dt.setHours(dt.getHours() + 2);
  console.log("dt: ", dt);
  ///api/comments"
  dataComment.Date_com = new Date();
  // dataComment.Visuel_com = "";

  console.log("Fonction ", dataComment);

  //const url = "http://localhost:3100/api/comments";

  // let url = "http://localhost:3100/api/users/comment2";
  let url = `http://localhost:3100/api/posts/comment`;
  //comment2
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
}
async function ModCreatePost(idUser, leToken, inputs) {
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
}

/**bof */
function oneTitre(title) {
  document.title = title;
}

export {
  addLike,
  writeComment,
  showPosts,
  showPostsByUser,
  searchPostTxt,
  modifPosts,
  deletePost,
  ModCreatePost,
  myLog,
  mySign,
  oneTitre,
  deConnect,
  findUser,
};
//

/**
   * 
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
