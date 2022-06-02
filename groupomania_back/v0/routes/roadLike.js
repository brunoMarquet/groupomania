const express = require("express");
const router = express.Router();

const verif = require("../middleware/verif");

const ctrComment = require("../controllers/ctrLike");

router.post(verif, ctrComment.createLike);
// createComment);

router.delete("/:id", verif, ctrComment.deleteLike);

module.exports = router;
