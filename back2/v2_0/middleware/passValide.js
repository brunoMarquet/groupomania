// IMPORT(S)
const passwordValidator = require("password-validator"); // Importation du package 'password-validator'

// Création du schéma
const passwordSchema = new passwordValidator();

// Le schéma que doit respecter le mot de passe
passwordSchema
  .is()
  .min(3, "minimum 3 charactères ") // Minimum length 3
  .not()
  .spaces(0, "ne doit pas contenir d'espace blanc") //
  .has()
  .digits(1, "au minimum 1 chiffre ")
  .is()
  .not()
  .oneOf(["000", "aaa"], "! -000-, -aaa- sont Blacklistées :"); // Blacklist these values

// EXPORT(S)

// VERIFICATION DU MOT DE PASSE : Middleware de vérification de la qualité du mot de passe par rapport au schéma
module.exports = function (req, res, next) {
  // Si le mot de passe n'est pas conforme au schéma
  const unPsw = req.body["password"];
  const testValid = passwordSchema.validate(unPsw, { details: true });
  if (testValid.length !== 0) {
    return res.status(400).json({
      message: testValid,
    });
  } else {
    next();
  }
};

/**version #
 * 
  .is()
  .min(8) // Longueur minimal 8
  .is()
  .max(15) // Longueur maximal 15
  .has()
  .uppercase(1) // Doit avoir des lettres majuscules
  .has()
  .lowercase() // Doit avoir des lettres minuscules
  .has()
  .digits(1) // Doit avoir au moins 1 chiffres
  .has()
  .not()
  .spaces() // Ne doit pas avoir d'espaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Passw0rd1234567", "Password1234567", "Azertyuiop12345"]); // Blacklist des mots de passe
 * 
 */
