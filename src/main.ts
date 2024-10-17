import * as ESICADHelpers from "./lib/ESICAD";
// je commence un commentaire (c'est-à-dire une ligne de texte qui n'est pas une instruction, mais juste une indication dans le code source ) à l'aide de //
let maVariable: number; // je peux également mettre des commentaires en fin de ligne
let nomDeLutilisateur: string;
let messageDeBienvenue: string = "Bonjour, ";
/*
  Si mon commentaire est particulièrement long, ou si je préfère l'écrire sur plusieurs lignes,
  je peux utiliser une autre syntaxe : /* <Contenu du commentaire 
  et finir par */

// ESICADHelpers est une mico-bibliothèque conçue pour simplifier la saisie de l'utilisateur et l'affichage à l'écran
ESICADHelpers.afficher("Bonjour, je suis un programme écrit en TypeScript !");
// Elle est utilisable car la première ligne "import * as ESICADHelpers from "./lib/ESICAD";" permet de l'utiliser !
ESICADHelpers.afficher("Mon code source se situe dans le fichier `src/main.ts`.");
ESICADHelpers.afficher("Quel est votre nom ?");
// je récupère la saisie de l'utilisateur 
nomDeLutilisateur = ESICADHelpers.saisirTexte("Votre nom : ");
// je peux coller côte-à-côte du texte à l'aide de l'opérateur + (je *concatène* du texte)
messageDeBienvenue = messageDeBienvenue + nomDeLutilisateur + " !";
// on affiche un message à l'utilisateur
ESICADHelpers.afficher(messageDeBienvenue);
// je fais une boucle conditionnelle (Faire ... TantQue(<condition>))
do {
  maVariable = ESICADHelpers.saisirNombre("Merci de saisir un nombre : ");
  // j'écris une condition
  if (maVariable > 100) {
    ESICADHelpers.afficher("C'est plus grand que 💯");
  } else if (maVariable < 100) {
    ESICADHelpers.afficher("C'est moins grand que 💯");
  } else {
    ESICADHelpers.afficher("C'est pile 💯🎉");
  }
} while (ESICADHelpers.saisirBooleen("Recommencer ?"));
// On est sorti de la boucle, on affiche un dernier message et on sort du programme
ESICADHelpers.afficher("Le programme va se terminer après l'exécution de cette instruction.");
