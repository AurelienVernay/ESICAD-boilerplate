import * as ESICADHelpers from "./lib/ESICAD";

let maVariable;
ESICADHelpers.afficher("Bonjour, je suis un programme à débugger !");
maVariable = ESICADHelpers.saisirNombre("Saisir un nombre : ");
if (maVariable > 100) {
  ESICADHelpers.afficher("C'est plus grand que 100");
} else if (maVariable < 100) {
  ESICADHelpers.afficher("C'est moins grand que 100");
} else {
  ESICADHelpers.afficher("C'est 100");
}
