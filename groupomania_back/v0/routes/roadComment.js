const express = require("express");
const router = express.Router();

const verif = require("../middleware/verif");

const ctrComment = require("../controllers/ctrComment");

router.post(verif, ctrComment.createPost22);
// createComment);

router.delete("/:id", verif, ctrComment.deleteComment);

module.exports = router;
