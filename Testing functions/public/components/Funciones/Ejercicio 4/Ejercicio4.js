"use strict";
/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
*/
let array1 = ["rat", "dog", "cat", "parrot", "cat"];
let array2 = ["cat", "lizard", "rat", "cat"];
let array3 = array1.concat(array2);
let duplicado = [];
function Repetidos() {
    const unicArray = [...array3].sort();
    for (let i = 0; i < unicArray.length; i++) {
        if (unicArray[i + 1] === unicArray[i]) {
            duplicado.push(unicArray[i]);
        }
    }
    console.log([...new Set(duplicado)]);
}
module.exports = Repetidos;
