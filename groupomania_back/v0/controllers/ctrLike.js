const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//const xss = require("xss");

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

exports.createLike____ = async (req, res) => {
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

exports.deleteLike = async (req, res) => {
  const idPost = Number(req.params.id);
  const idUser = Number(res.locals.userId);

  try {
    const deleLike = await prisma.likes.deleteMany({
      where: {
        Post_id: idPost,
        Post_user: idUser,
      },
    });

    if (deleLike && deleLike.count === 1) {
      res.json({ effacer: "ok" });
    } else {
      res.json({ erreur: "Erreur " + deleLike.count });
    }
    console.log(deleLike);
    res.json({ effacer: "deleLike" });
  } catch (error) {
    res.json({ error });
  }
};
