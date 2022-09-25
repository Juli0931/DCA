"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Pares = [];
let Impares = [];
function Divisibles() {
    for (let i = 0; i < Numeros.length; i++) {
        if (i % 2 == 0) {
            Impares.push(Numeros[i]);
        }
        else {
            Pares.push(Numeros[i]);
        }
    }
}
module.exports = Divisibles;
