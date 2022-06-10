const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//const xss = require("xss");

exports.createLike = async (req, res) => {
  let datas = req.body;
  //console.log("createLike 222", datas);
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
  //console.log("del Like", idUser);

  try {
    const deleLike = await prisma.likes.deleteMany({
      where: {
        Post_like: idPost,
        User_like: idUser,
      },
    });

    if (deleLike && deleLike.count === 1) {
      res.json(deleLike);
    } else {
      res.json({ erreur: "Erreur " + deleLike.count });
    }
  } catch (error) {
    res.json({ error });
  }
};
exports.createLike_boucle_infinie = async (req, res) => {
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
