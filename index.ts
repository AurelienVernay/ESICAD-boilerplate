import * as ESICADHelpers from "./lib/ESICAD";

let maVariable;
ESICADHelpers.afficher("Bonjour, je suis un programme à débugger !");
maVariable = ESICADHelpers.saisirNombre("Saisir un nombre : ");
if (maVariable > 100) {
  ESICADHelpers.afficher("C'est plus grand que 💯");
} else if (maVariable < 100) {
  ESICADHelpers.afficher("C'est moins grand que 💯");
} else {
  ESICADHelpers.afficher("C'est 💯 😲");
}
