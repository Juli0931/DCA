"use strict";
const FizzBuzzFn = require('./Ejercicio7');
test('Numeros enteros', () => {
    expect(FizzBuzz).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz 16 17 Fizz 19 Buzz ");
    console.log(FizzBuzz);
});
