"use strict";
/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"*/
let Ideas = ["Buena", "Buena", "Buena", "Buena", "Mala"];
function Calificador(a) {
    var Contador = 0;
    let i = 0;
    while ((i = Ideas.indexOf("Buena", i) + 1) > 0) {
        Contador++;
    }
    if (Contador === 0) {
        console.log("Falló");
    }
    if (Contador === 1 || Contador === 2) {
        console.log("Publicar");
    }
    if (Contador > 2) {
        console.log("Fantástico");
    }
}
Calificador(Ideas);
module.exports = Calificador;
