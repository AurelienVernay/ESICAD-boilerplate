"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ESICAD_1 = require("./lib/ESICAD");
const monNom = (0, ESICAD_1.saisirTexte)("Votre nom :");
(0, ESICAD_1.afficher)("Votre nom est : " + monNom);
