const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
//
//gestion des "post":
const includeFull = {
  persons: { select: { Id_user: true, Pseudo: true, Email: true } },
  comments: {
    include: { persons: { select: { Id_user: true, Pseudo: true } } },
  },
  // likes: { include: { User_like: true } },
  likes: { include: { persons: { select: { Id_user: true } } } },
};
const includeLight = {
  comments: {
    include: { persons: { select: { Id_user: true, Pseudo: true } } },
  },
  likes: { include: { persons: { select: { Id_user: true } } } },
};

//const xss = require("xss");
//if (res.locals.userId)

/**DEBUGGGGGG */
exports.createComment = async (req, res) => {
  let datas = req.body;
  console.log("createComment", datas);
  try {
    const newPost = await prisma.comments.create({
      data: datas,
    });
    console.log("NN", newPost);

    res.json(newPost);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

exports.createLike = async (req, res) => {
  let datas = req.body;
  console.log("createLike", datas);

  try {
    const newLike = await prisma.likes.create({
      data: datas,
    });
    res.json(newLike);
  } catch (error) {
    res.json({ error });
  }
};

exports.createLike_boucle = async (req, res) => {
  let datas = req.body;
  console.log("createLike", datas);

  try {
    const findLike = await prisma.likes.findMany({
      where: {
        Post_like: datas.idPost,
        User_like: datas.idUser,
      },
    });
    console.log(findLike);
    if (findLike.length === 0) {
      const newLike = await prisma.likes.create({
        data: datas,
      });
      res.json(newLike);
    }
  } catch (error) {
    res.json({ error });
  }
};

exports.getAllPostOrder = async (req, res) => {
  // const tri3 = "Date_post";
  const tri = req.params.id;
  //res.locals.tokenVerif
  //console.log("tri ", tri);

  //console.log("ki ? ", res.locals.userId);

  if (res.locals.isAdmin) {
    console.log("res admin Yes  ", res.locals.isAdmin);
  }
  if (res.locals.userId) {
    try {
      const posts = await prisma.posts.findMany({
        include: includeFull,
        orderBy: {
          //[tri]: "desc",
          [tri]: "asc",
        },
      });

      res.json(posts);
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  } else {
    console.log("token oups");
  }
};

exports.createPost = async (req, res) => {
  // res.json({ create: "??" });
  // const ObjectFile = JSON.parse(req.body);
  // console.log("ici ", ObjectFile);
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

exports.updatePost = async (req, res) => {
  const idPost = Number(req.params.id);
  const idUser = Number(res.locals.userId);
  const datas = req.body;

  if (parseInt(res.locals.userId) === parseInt(datas.Post_user)) {
    console.log("verif ok YESSSS  ");

    try {
      const modifPosts = await prisma.posts.updateMany({
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

/**
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
