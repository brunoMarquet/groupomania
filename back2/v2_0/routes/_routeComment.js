const express = require("express");
const router = express.Router();

const verif = require("../middleware/verif");
const ctrComment = require("../controllers/ctrComment");
//console.log("jexiste");
router.post("/", verif, ctrComment.createComment);
router.delete("/:id", verif, ctrComment.deleteComment);
router.put("/:id", verif, ctrComment.updateComment);

module.exports = router;
