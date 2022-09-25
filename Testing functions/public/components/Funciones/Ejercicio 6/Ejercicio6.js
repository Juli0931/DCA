"use strict";
/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 * */
function Orden() {
    let ArrayNL = ["b", 6, "a", "q", 7, 2];
    let Letra1 = ArrayNL.slice(0, 1);
    let Letra2 = ArrayNL.slice(2, 3);
    let Letra3 = ArrayNL.slice(5, 6);
    let GruposOrdenados = Letra1.concat(Letra2, Letra3).sort();
    let Numeros = ArrayNL.filter(Number);
    let NumerosOrd = Numeros.sort((a, b) => a - b);
    let Sorted = GruposOrdenados.concat(NumerosOrd);
    console.log(Sorted);
}
module.exports = Orden;
