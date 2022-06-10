const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const clefToken = "RANDOM_TOKEN_SECRET_101";
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, clefToken);
    // console.log("detoken: ", decodedToken);
    const userId = decodedToken.userId;
    const userPseudo = decodedToken.userPseudo;
    const isAdmin = decodedToken.isAdmin;
    res.locals.userId = userId;
    res.locals.userPseudo = userPseudo;
    if (isAdmin) {
      res.locals.isAdmin = isAdmin;
    }
    if (req.body && req.body.userId) {
      console.log("body: ", req.body.userId);
    }
    /*  res.locals.tokenVerif = {
      userPseudo: userPseudo,
      userId: userId,
      isAdmin: isAdmin,
    }; */

    next();
  } catch {
    res.status(401).json({
      error: new Error("user+ token NON ok !"),
    });
  }
};

/**OLD
 *
 *
 *
 */
