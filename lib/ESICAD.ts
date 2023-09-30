import promptSync from "prompt-sync";
const prompt = promptSync({
  sigint: true,
  eot: true,
});
const afficher = (texte: string) => console.log(texte);

function saisirTexte(message?: string): string {
  return prompt(message + "");
}
function saisirNombre(message?: string): number | null {
  const output = Number(prompt(message + ""));
  return isNaN(output) ? null : output;
}
function saisirBooleen(message?: string): boolean {
  const output = prompt(message + "");
  let val = false;
  switch (output) {
    case "vrai":
    case "VRAI":
    case "V":
    case "v":
    case "oui":
    case "OUI":
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
}
const helpers = { saisirBooleen, saisirNombre, saisirTexte, afficher };

export { helpers as ESICADHelpers };
