const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/ctrUserB");
const verif = require("../middleware/verif");
const valdPsw = require("../middleware/passValide");

router.post("/login", userCtrl.login);

router.post("/signup", valdPsw, userCtrl.signUp);

//prov
//router.post("/comment2", userCtrl.comment2);

//router.get("/tous", verif, userCtrl.getAllUsers);
// ,a revoir ?
module.exports = router;

//router.post("/signup", userCtrl.signup);
