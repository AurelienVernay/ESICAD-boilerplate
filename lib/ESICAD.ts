import promptSync from "prompt-sync";
const prompt = promptSync({
  sigint: true,
  eot: true,
});

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
  return prompt(message);
};

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une valeur numérique. Si l'entrée de l'utilisateur ne peut être traitée
 *  comme un nombre, la valeur `null` sera retournée
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirNombre = (message?: string) => {
  const output = Number(prompt(message + ""));
  return (isNaN(output) ? null : output) as number;
};

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une valeur booléenne. La fonction comprendra comme vraie les entrées
 * `vrai`,`VRAI`,`V`,`v`,`oui`,`OUI`,`o`,`O`,`true`,`TRUE`, et faux n'importe quelle autre valeur.
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirBooleen = (message?: string): boolean => {
  const output = prompt(message + "");
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

export { saisirBooleen, saisirNombre, saisirTexte, afficher, valeurAleatoire };
