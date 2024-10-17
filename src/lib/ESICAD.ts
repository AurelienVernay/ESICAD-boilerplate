import fs from 'fs';
import readlineSync from "readline-sync";
/**
 * Affiche un texte à l'écran
 * @param {string} texte le texte que l'on veut afficher
 */
const afficher = (texte: string) => console.log(texte);

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une chaine de caractères.
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirTexte = (message: string = ""): string => {
  let buffer = Buffer.alloc(1024);
  let bytesRead = fs.readSync(0, buffer, 0, buffer.length, 0);
  let input = buffer.toString('latin1', 0, bytesRead).trim();
  return input;

  // rl.question('Entrez un texte avec des accents : ', (answer) => {
  //   console.log(`Vous avez entré : ${answer}`);
  //   rl.close();
  // });
  // return answer;
};

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une valeur numérique. Si l'entrée de l'utilisateur ne peut être traitée
 *  comme un nombre, la valeur `null` sera retournée
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirNombre = (message = "") => {
  let output = NaN;
  do {
    output = Number(readlineSync.question(message));
    if (isNaN(output)) {
      afficher("Saisie incorrecte, veuillez recommencer svp");
    }
  } while (isNaN(output))

  return output;
};

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une valeur booléenne. La fonction comprendra comme vraie les entrées
 * `vrai`,`VRAI`,`V`,`v`,`oui`,`OUI`,`o`,`O`,`true`,`TRUE`, et faux n'importe quelle autre valeur.
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirBooleen = (message = ""): boolean => {
  const output = readlineSync.question(message);
  let val = false;
  switch (output) {
    case "vrai":
    case "VRAI":
    case "V":
    case "v":
    case "oui":
    case "OUI":
    case "yes":
    case "YES":
    case "y":
    case "Y":
    case "o":
    case "O":
    case "true":
    case "TRUE":
      val = true;
      break;
    default:
      break;
  }
  return val;
};

/**
 * Renvoie une valeur aléatoire entre la valeur minimum
 *  et la valeur maximum passées en paramètres.
 * Si aucun paramètre n'est passée, la valeur générée sera entre 1 et 10
 * @param {number} minimum le minimum voulu
 * @param {number} maximum le maximum voulu
 * @returns
 */
const valeurAleatoire = (minimum = 1, maximum = 10) =>
  Math.floor(
    Math.min(minimum, maximum) +
    Math.random() *
    (Math.max(minimum, maximum) - Math.min(minimum, maximum) + 1)
  );

export { afficher, saisirBooleen, saisirNombre, saisirTexte, valeurAleatoire };

