const express = require("express");
const router = express.Router();

const verif = require("../middleware/verif");
//const multer = require("../middleware/multer-config");

const ctrPost = require("../controllers/ctrPost");
router.get("/", verif, ctrPost.getAllPost);

router.post("/", verif, ctrPost.createPost);

router.put("/:id", verif, ctrPost.updatePost);

router.delete("/:id", verif, ctrPost.deletePost);
router.get("/userId/:id", ctrPost.showPostByUser);

//debug
//router.post("/modif/:id", verif, ctrPost.updatePost);

/*

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
