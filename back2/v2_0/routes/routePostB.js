const express = require("express");
const router = express.Router();

const verif = require("../middleware/verif");
const multer = require("../middleware/multer");

const ctrPost = require("../controllers/ctrPostB");

router.post("/", verif, multer, ctrPost.createPost);

router.post("/choix/", verif, ctrPost.getAllPostChoix);
router.post("/choix1/", verif, ctrPost.getAllPostChoix1);
//router.post("/test/", verif, ctrPost.testPost);
router.post("/sql/", verif, ctrPost.directSql);
router.post("/testBody/", verif, ctrPost.testBody);

/*//router.get("/", verif, ctrPost.getAllPost);
//router.get("/:id", verif, ctrPost.getAllPostOrder);

//router.put("/searchTxt/", verif, ctrPost.searchInText);

//router.post("/test/", ctrPost.testPost);

//DEBUG

//debug FIN

router.put("/:id", verif, multer, ctrPost.updatePost);
//router.get("/test/:id", verif, ctrPost.findPost);
//deletePost
router.delete("/:id", verif, ctrPost.deletePost);
router.get("/userId/:id", ctrPost.showPostByUser);

//debug
//router.post("/modif/:id", verif, ctrPost.updatePost);

http://localhost:3100/api/posts/userId/
router.get("/", verif, sauceCtrl.infodate, sauceCtrl.getAllSauce);
router.get("/:id", verif, sauceCtrl.getOneSauce);
router.post("/", verif, multer, sauceCtrl.createSauce);

router.put("/:id", verif, multer, sauceCtrl.modifySauce);
router.delete("/:id", verif, sauceCtrl.deleteSauce);
router.post("/:id/like", verif, sauceCtrl.voteSauce);

//ajouts de routes tests pour le front html

router.get("/byUser/:id", verif, sauceCtrl.getAllSauceByUser);
router.put("/test/:id", verif, sauceCtrl.modifySauceLight);
*/
module.exports = router;
