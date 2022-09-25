"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 6];
function Contain(a, b) {
    let allFounded = b.every((b) => a.includes(b));
    console.log(allFounded);
}
Contain(arr1, arr2);
module.exports = Contain;
