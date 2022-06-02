const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//

const includeLight = {
  comments: {
    include: { persons: { select: { Id_user: true, Pseudo: true } } },
  },
  likes: { include: { persons: { select: { Id_user: true } } } },
};

//const xss = require("xss");
//if (res.locals.userId)

exports.createComment = async (req, res) => {
  console.log("createComment");
  let datas = req.body;
  try {
    const newPost = await prisma.comments.create({
      data: datas,
    });

    res.json(newPost);
  } catch (error) {
    res.json({ error });
  }
};

exports.deleteComment = async (req, res) => {
  const idPost = Number(req.params.id);
  const idUser = Number(res.locals.userId);

  try {
    const deletePosts = await prisma.comments.deleteMany({
      where: {
        Post_id: idPost,
        Post_user: idUser,
      },
    });
    if (deletePosts.count === 1) {
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
exports.createPost22 = async (req, res) => {
  console.log("ici22 ");
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
