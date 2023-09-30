"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.afficher = exports.saisirTexte = exports.saisirNombre = exports.saisirBooleen = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({
    sigint: true,
    eot: true,
});
const afficher = (texte) => console.log(texte);
exports.afficher = afficher;
function saisirTexte(message) {
    return prompt(message + "");
}
exports.saisirTexte = saisirTexte;
function saisirNombre(message) {
    const output = Number(prompt(message + ""));
    return isNaN(output) ? null : output;
}
exports.saisirNombre = saisirNombre;
function saisirBooleen(message) {
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
exports.saisirBooleen = saisirBooleen;
