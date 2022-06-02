const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/ctrUser");
const verif = require("../middleware/verif");

router.post("/login", userCtrl.login);

router.post("/signup", userCtrl.signUp);

//prov
//router.post("/comment2", userCtrl.comment2);

router.get("/tous", verif, userCtrl.getAllUsers);
// ,a revoir ?
module.exports = router;

//router.post("/signup", userCtrl.signup);
