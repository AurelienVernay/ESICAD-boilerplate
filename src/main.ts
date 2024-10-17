import * as ESICADHelpers from "./lib/ESICAD";

let maVariable: number;
let nomDeLutilisateur: string;
let messageDeBienvenue: string = "Bonjour, ";
ESICADHelpers.afficher("Bonjour, je suis un programme écrit en TypeScript !");
ESICADHelpers.afficher("Mon code source se situe dans le fichier `src/main.ts`.");
ESICADHelpers.afficher("Quel est votre nom ?");
nomDeLutilisateur = ESICADHelpers.saisirTexte("Votre nom : ");
messageDeBienvenue = messageDeBienvenue + nomDeLutilisateur + " !";
ESICADHelpers.afficher(messageDeBienvenue);
maVariable = ESICADHelpers.saisirNombre("Merci de saisir un nombre : ");
if (maVariable > 100) {
  ESICADHelpers.afficher("C'est plus grand que 💯");
} else if (maVariable < 100) {
  ESICADHelpers.afficher("C'est moins grand que 💯");
} else {
  ESICADHelpers.afficher("C'est pile 💯🎉");
}
