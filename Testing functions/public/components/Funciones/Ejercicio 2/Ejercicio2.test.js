"use strict";
const DivisiblesFn = require('./Ejercicio2');
test('Números pares', () => {
    let Pares = [];
    expect(Pares).toEqual([2, 4, 6, 8]);
    console.log(Pares);
});
test('Números impares', () => {
    let Impares = [];
    expect(Impares).toEqual([1, 3, 5, 7, 9]);
    console.log(Impares);
});
