const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const clefToken = "RANDOM_TOKEN_SECRET_101";
//const maskData = require("maskdata");
//const passwordValidator = require("password-validator");
const mysqlConnection = require("../database/db");
//const reglemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/*const schemaPassValid = new passwordValidator();
*schemaPassValid
 * parametre "légers pour la version test"
 
schemaPassValid
  .is()
  .min(3, "minimum 3 charactères ") // Minimum length 3
  .not()
  .spaces(0, "ne doit pas contenir d'espace blanc") //
  .has()
  .digits(1, "au minimum 1 chiffre ")
  .is()
  .not()
  .oneOf(["000", "aaa"], "! -000-, -aaa- sont Blacklistées :"); // Blacklist these values
*/
function writeJson(unUser, type) {
  let userLight = {};
  let charge = {};
  let info = "vous etes connectés ";
  if (type === "sign") {
    info = "vous etes enregistré ";
  }
  info += new Date().toLocaleTimeString();
  if (unUser.isAdmin === true) {
    /* const tokenAdmin =
        "$2b$10$YTlU3z2dUYomR788prmdWHZM.231WKOZNwbUL6dWN7Yr5iXZqzBLs1ca"; */
    const tokenAdmin = "5iXZqzBLs1ca";

    userLight = {
      userPseudo: unUser.Pseudo,
      userId: unUser.Id_user,
      isAdmin: tokenAdmin,
    };
    charge = {
      user: userLight,
      isAdmin: 1,
      message: info,
      token: jwt.sign(userLight, clefToken, {
        expiresIn: "24h",
      }),
    };
  } else {
    userLight = { userPseudo: unUser.Pseudo, userId: unUser.Id_user };
    console.log("userLight:", userLight);
    charge = {
      user: userLight,

      message: info,
      token: jwt.sign(userLight, clefToken, {
        expiresIn: "24h",
      }),
    };
  }

  return charge;
}

const login0 = async (req, res) => {
  let unPsw = req.body["password"];
  let unPseudo = req.body["Pseudo"];

  res.status(200).json({ titi: "titi" });
};

const login = async (req, res) => {
  // Récupération de l'email lors de la requête

  let unPsw = req.body["password"];
  let unPseudo = req.body["Pseudo"];

  // Requête SQL pour chercher si l'email de l'utilisateur est présent dans la base de données
  mysqlConnection.query(
    `SELECT * FROM persons WHERE Pseudo="${unPseudo}"`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(400).json({ message: "Une erreur est survenue ! ", error });
      } else {
        // Si l'email de l'utilisateur n'est pas présent dans la base de données
        if (results == 0) {
          return res.status(404).json({
            message: `L'unPseudo '${unPseudo}' est inexistante dans la base de donnée ! `,
          });
        } else {
          const unUser = results[0];
          bcrypt.compare(unPsw, unUser.PassWord).then((valid) => {
            console.log("Pwd valide  ", valid);
            if (!valid) {
              console.log("user+ Mot de passe " + unPsw + " incorrect NON ok!");
              return res.status(401).json({
                message: "Mot de passe : '" + unPsw + "' incorrect !",
              });
            } else {
              //valide
              console.log("user login  ok!");
              const charge = writeJson(unUser, "rien");
              res.status(200).json(charge);
            }
          });

          /*return res.status(200).json({
            message: `L'unPseudo '${unPseudo}' est ok ! `,
          });*/
        }
      }
    }
  );
};

const signUp = async (req, res) => {
  let unPsw = req.body["password"];
  let unPseudo = req.body["Pseudo"];
  let answer = "";

  const id_user = Math.floor(Math.random() * 10000000);
  const hash = bcrypt.hashSync(unPsw, 10);
  const user = {
    Id_user: id_user,
    Pseudo: unPseudo,
    PassWord: hash,
  };
  console.log("a creer", user);
  console.dir(req.body);
  //const testValid = schemaPassValid.validate(unPsw, { details: true });

  mysqlConnection.query(
    `INSERT INTO persons (Id_user, Pseudo, PassWord) VALUES ("${user.Id_user}", "${user.Pseudo}", "${user.PassWord}")`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(400).json({
          message: `Le pseudo'${user.Pseudo}' existe déjà s !`,
          error,
        });
      } else {
        console.log(`L'utilisateur ${user.Pseudo}'a été crée !`);
        const charge = writeJson(user, "sign");
        res.status(201).json(charge);
      }
    }
  );
};

exports.deleteUser = async (req, res) => {
  try {
    const idUser = Number(req.params.id);

    const deletePosts = await prisma.persons.delete({
      where: {
        id_user: idUser,
      },
    });
    res.json(deletePosts);
  } catch (error) {
    res.json({ error });
  }
};
const getAllUsers = async (req, res) => {
  console.log("answer getUsers");
  try {
    const allUsers = await prisma.$queryRaw`SELECT * From persons `;

    res.json(allUsers);
  } catch (error) {
    res.json({ error });
  }
};

const comment2 = async (req, res) => {
  console.log("createComment");
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

module.exports = { login, signUp, getAllUsers, comment2 };

/**verifReq
 *
 *
 *
 *pour verifier que le req.body contient..
 */

/**estValide
 *pour verifier en regex le mail ..
 
function isValid(value, regle) {
  return regle.test(value);
}


function verifReq(req) {
  if (req.body["password"] && req.body["email"]) {
    return true;
  }
}
*/

/* signup = (req, res) => {
  let answer = "";

  if (verifReq(req)) {
    const psw = req.body["password"];
    const mail = req.body["email"];
    console.log(`hello_sign_up! ${mail} pass ${psw}`);

    if (!schemaPassValid.validate(psw)) {
      answer = "mot de passe pas adapté !";
      console.log(answer);
      res.status(401).json({
        message: answer,
      });
    }
    if (!isValid(mail, reglemail)) {
      answer = "votre mail parait mauvais !";
      console.log(answer);
      res.status(401).json({
        message: answer,
      });
    }

    const d = new Date();
    let laDate = `${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;

    res.locals.mail = mail;

    bcrypt
      .hash(psw, 10)
      .then((hash) => {
        const user = new User({
          email: mail,
          password: hash,
          age: Math.floor(Math.random() * 40) + 18,
          date: laDate,
        });
        console.log("user à creer ???_ " + mail);
        user
          .save()
          .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  } else {
    console.log("les paramètres ne collent pas !(req.body problème !)");
  }
}; 
const login_simple = async (req, res) => {
  let unPsw = req.body["password"];
  let unPseudo = req.body["Pseudo"];
  console.dir(req.body);

  try {
    const Users = await prisma.persons.findMany({
      where: { Pseudo: unPseudo },
    });
    // if many ????
    console.log("trouve ", Users);

    if (Users.length === 1) {
      const unUser = Users[0];
      console.log(unPsw, unUser.PassWord);

      bcrypt
        .compare(unPsw, unUser.PassWord)
        .then((valid) => {
          console.log("Pwd valide  ", valid);
          if (!valid) {
            console.log("user+ Mot de passe " + unPsw + " incorrect NON ok!");
            return res
              .status(401)
              .json({ message: "Mot de passe : '" + unPsw + "' incorrect !" });
          } else {
            //valide
            console.log("user login  ok!");
            let jsonToken = {};
            if (unUser.isAdmin === 1) {
              const tokenAdmin =
                "$2b$10$YTlU3z2dUYomR788prmdWHZM.231WKOZNwbUL6dWN7Yr5iXZqzBLs1ca";
              jsonToken = {
                userPseudo: unPseudo,
                userId: unUser.Id_user,
                isAdmin: tokenAdmin,
              };
            } else
              jsonToken == { userPseudo: unPseudo, userId: unUser.Id_user };

            res.status(200).json({
              userId: unUser.Id_user,
              userPseudo: unPseudo,
              token: jwt.sign(jsonToken, clefToken, {
                expiresIn: "24h",
              }),
            });
          }
        })

        .catch((error) => res.status(500).json({ error }));
    } else {
      res.json({ message: "Utilisateur '" + unPseudo + "' non trouvé !" });
    }
  } catch (error) {
    res.json({ message: "Utilisateur non trouvé Quoi 3333!" });
  }
};

*/

//http://localhost:3100/api/users/login
