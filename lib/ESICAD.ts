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
const saisirTexte = (message?: string): string => {
  return prompt(message + "");
};

/**
 * Demande à l'utilisateur de saisir une valeur qui sera interprétée
 * comme une valeur numérique. Si l'entrée de l'utilisateur ne peut être traitée
 *  comme un nombre, la valeur `null` sera retournée
 * @param {string} message un message que l'on veut afficher avant de saisir (optionnel)
 */
const saisirNombre = (message?: string): number | null => {
  const output = Number(prompt(message + ""));
  return isNaN(output) ? null : output;
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

const helpers = { saisirBooleen, saisirNombre, saisirTexte, afficher };

export { helpers as ESICADHelpers };
