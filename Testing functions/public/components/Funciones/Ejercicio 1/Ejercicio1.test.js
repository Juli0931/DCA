"use strict";
const CombinarFn = require('./Ejercicio1');
test('Combinar arreglos', () => {
    let arrayC = ["h", 7, "a", 4, "c", 17, 10, 48];
    expect(arrayC).toEqual(['h', 7, 'a', 4, 'c', 17, 10, 48]);
    console.log(arrayC);
});
