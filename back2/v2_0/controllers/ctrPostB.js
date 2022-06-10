const mysqlConnection = require("../database/db");
const fs = require("fs");

//
//gestion des "post":

//const xss = require("xss");

//getAllPostChoix
exports.getAllPostChoix_TEST = async (req, res) => {
  const datas = req.body;

  console.log("oups _getAllPostChoix2_ ", datas);
  res.json({ test: "error" });
};

exports.testBody = async (req, res) => {
  // console.log("testRq_file", req.files);
  console.log("**********************");
  console.log("testRq_body", req.body);
  console.log("**********************");
  console.log("url", req.originalUrl);

  let retour = { coucou: "hello" };
  if (!req.body) {
    retour = req.body;
  }
  res.json(retour);
};
exports.directSql = async (req, res) => {
  console.log("COUCOU...");
  const requete = req.body.requete;
  // const requete = "SELECT Post_id, Titre FROM posts LIMIT 5";
  console.log("requete: ", requete);
  res.json({ test: "error6666" });
  /*  mysqlConnection.query(requete, function (err, result, fields) {
    if (err) throw res.status(400).json({ message: "!", err });
    res.json(result);
  }); */
};

exports.getAllPostChoix1 = async (req, res) => {
  console.log(new Date().toLocaleTimeString(), "testRq_body", req.body);
  const requete = req.body.requete;
  mysqlConnection.query(requete, function (err, result, fields) {
    if (err) throw res.status(400).json({ message: "!", err });
    res.json(result);
  });
};

exports.getAllPostChoix = async (req, res) => {
  // console.log("getAllPostChoix_ki ? ", res.locals.userId);
  //{ord: "desc", number: 12, matter: "Date_post"}

  const datas = req.body;
  // const order = "DESC"; //datas.ord;
  // const testBB = false;
  //const maxPostAff = parseInt(datas.nbrMax);
  //const tri = datas.matter;
  //console.log("******************************");
  //console.log("oups", datas);
  //SELECT post_id, persons.Pseudo,Titre,Contenu,Date_post,	Post_visuel FROM posts INNER JOIN persons ON persons.Id_user=posts.Post_user ORDER BY Titre ASC
  //  `SELECT * FROM persons WHERE Pseudo="${unPseudo}"`
  // ORDER BY Titre DESC LIMIT 10
  if (res.locals.userId) {
    console.log(new Date().toLocaleTimeString(), "test", datas.ord);
    let requete = `SELECT Post_id, persons.Pseudo, Titre,
       Contenu,Date_post,Post_visuel,Post_user
        FROM posts INNER JOIN persons ON persons.Id_user=posts.Post_user
        ORDER BY ${datas.matter} ${datas.ord} LIMIT  ${parseInt(datas.nbrMax)}`;

    mysqlConnection.query(requete, function (err, result, fields) {
      if (err) throw res.status(400).json({ message: "!", err });

      res.json(result);
    });
  } else {
    console.log("token oups");
  }
};

exports.createPost = async (req, res) => {
  // res.json({ create: "??" });
  // const ObjectFile = JSON.parse(req.body);
  // console.log("ici ", ObjectFile);
  console.log("", req);
  let datas = req.body;
  if (req.file) {
    console.log(req.file);
    const imageUrl = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
    datas.Post_visuel = imageUrl;
  }

  try {
    const newPost = await prisma.posts.create({
      data: datas,
    });

    res.json(newPost);
  } catch (error) {
    res.json({ error });
  }
};
/*
exports.updatePost = async (req, res) => {
  const idPost = Number(req.params.id);
  const idUser = Number(res.locals.userId);
  const datas = req.body;

  if (parseInt(res.locals.userId) === parseInt(datas.Post_user)) {
    console.log("verif ok updatePost  ");

    try {
      const modifPosts = await prisma.posts.update({
        where: {
          Post_id: idPost,
          Post_user: idUser,
        },
        data: datas,
      });
      //console.log(modifPosts);
      if (modifPosts.count === 1) {
        res.json({ modifier: datas });
      } else {
        res.json({ erreur: datas });
      }
      // res.json(modifPosts);
    } catch (error) {
      console.log("OOPs", error);
      res.json({ error });
    }
  }
};

exports.deletePost = async (req, res) => {
  const idPost = Number(req.params.id);
  const idUser = Number(res.locals.userId);

  try {
    const deletePosts = await prisma.posts.deleteMany({
      where: {
        Post_id: idPost,
        Post_user: idUser,
      },
    });
    if (deletePosts && deletePosts.count === 1) {
      res.json({ effacer: "ok" });
    } else {
      res.json({ erreur: "Erreur " + deletePosts.count });
    }
    console.log(deletePosts);
    res.json({ effacer: "deletePosts" });
  } catch (error) {
    res.json({ error });
  }
};

exports.showPostByUser = async (req, res) => {
  try {
    const idUser = Number(req.params.id);
    const choix = "Post_user";

    const allPosts = await prisma.posts.findMany({
      where: { [choix]: idUser },
      include: includeLight,
    });
    res.json(allPosts);
  } catch (error) {
    res.json({ error });
  }
};

exports.searchInText = async (req, res) => {
  try {
    const text2 = "Ukraine";
    console.log("searchInText ", req.body);

    const allPosts = await prisma.posts.findMany({
      where: {
        Contenu: {
          search: "Ukraine",
        },
      },
      include: includeFull,
    });
    res.json(allPosts);
  } catch (error) {
    res.json({ error });
  }
};
 * exports.testRqBody = async (req, res) => {
 console.log("testRqBody", req.body);
 res.json({ coucou: "hello" });
};
 * 
 * reponse
 * createComment {
  User_com: 21,
  Post_com: 104,
  Text_com: '1123',
  Date_com: '2022-06-01T13:12:39.463Z'
}
 * 
 * 
 * 
 * async function findPost(numero) {
  try {
    return prisma.posts.findUnique({
      where: {
        Post_id: numero,
      },
    });
  } catch (error) {
    return false;
  }
}
exports.deletePost_NAZ = async (req, res) => {
  const idPost = Number(req.params.id);
  console.log("truc del99 ", idPost, " _id  ", res.locals.userId);
  findPost2(idPost)
    .then((post) => {
      // await prisma.posts.delete(post)
      console.dir(post);
      res.status(200).json(post);
    })

    .catch();
};
 * exports.deletePost_old_ok = async (req, res) => {
  try {
    const idPost = Number(req.params.id);

    const deletePosts = await prisma.posts.delete({
      where: {
        Post_id: idPost,
      },
    });
    res.json(deletePosts);
  } catch (error) {
    res.json({ error });
  }
};
 * 
 * exports.updatePost_OLD = async (req, res) => {
  const idPost = Number(req.params.id);
  const datas = req.body;
  console.log("put123  : ", res.locals.userId, " _  ", datas.Post_user);
  if (parseInt(res.locals.userId) === parseInt(datas.Post_user)) {
    console.log("verif ok YESSSS  ");
  }
  try {
    const modifPosts = await prisma.posts.update({
      where: {
        Post_id: idPost,
        Post_user: 21,
      },
      data: datas,
    });
    console.log("YES:", modifPosts.Post_user);
    res.json(modifPosts);
  } catch (error) {
    console.log("OOPs", error);
    res.json({ error });
  }
};
 * const result = await prisma.posts.findMany({
  where: {
    body: {
      search: 'cat',
    },
  },
})
 */

/* truc pourri 
  
  mysqlConnection.query(requete, function (err, rows, fields) {
      if (err) throw res.status(400).json({ message: "!", error });
      res.render("index", {
        rows: rows,
      });
    });

    /* mysqlConnection.query(`SELECT * FROM persons`),
      function (error, results, fields) {
        if (error) {
          console.log(error);
          res.status(400).json({ message: "!", error });
        } else {
          console.log("results", results);
          console.log("fields", fields);
          res.status(200).json(results);
        }  }*/

/* mysqlConnection.query(
    `INSERT INTO publications (publicationDate, publicationPicture, idUser) VALUES ("${Titre}",  "${idUserUrl}")`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res
          .status(400)
          .json({ message: "Une erreur est survenue !});
      } else {
        res.status(201).json({ message: "La pu...... });
      }
    }
  ); */
