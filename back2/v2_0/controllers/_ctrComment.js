const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*
Id_com     Int       @id @default(autoincrement())
User_com   Int
Post_com

const xss = require("xss");
if (res.locals.userId)
*/

exports.createComment = async (req, res) => {
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
  const idCom = Number(req.params.id);
  const idUser = Number(res.locals.userId);
  console.log("del", idCom);

  try {
    const deletePosts = await prisma.comments.deleteMany({
      where: {
        Id_com: idCom,
        User_com: idUser,
      },
    });
    if (deletePosts.count === 1) {
      res.json({ effacer: "ok" });
    } else {
      res.json({ erreur: "Erreur " + deletePosts.count });
    }
  } catch (error) {
    res.json({ error });
  }
};
exports.updateComment = async (req, res) => {
  const idCom = Number(req.params.id);
  const idUser = Number(res.locals.userId);
  const datas = req.body;

  if (parseInt(res.locals.userId) === parseInt(datas.User_com)) {
    console.log("verif ok updateCom  ", idCom);

    try {
      const modifPosts = await prisma.comments.updateMany({
        where: {
          Id_com: idCom,
          User_com: idUser,
        },
        data: datas,
      });
      //console.log(modifPosts);
      if (modifPosts.count === 1) {
        res.json({ modifier: datas });
      }
      // res.json(modifPosts);
    } catch (error) {
      console.log("OOPs", error);
      res.json({ error });
    }
  }
};
/**else {
    console.log("OOP4444s");
    res.json({ "pbme identif" });
  } */
