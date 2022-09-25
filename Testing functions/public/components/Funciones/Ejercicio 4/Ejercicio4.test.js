"use strict";
const RepetidosFn = require('./Ejercicio4');
test('Palabras repetidas', () => {
    let array1 = ["rat", "dog", "cat", "parrot", "cat"];
    let array2 = ["cat", "lizard", "rat", "cat"];
    let duplicado = [];
    expect(RepetidosFn(array1, array2)).toEqual(duplicado);
});
