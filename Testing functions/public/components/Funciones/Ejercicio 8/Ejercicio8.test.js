"use strict";
const CalificadorFn = require('./Ejercicio8');
test('Falló', () => {
    let Ideas = [];
    expect(Calificador(Ideas)).toBe('Falló');
});
test('Publicar', () => {
    let Ideas = [];
    expect(Calificador(Ideas)).toBe('Publicar');
});
test('Fantástico', () => {
    let Ideas = [];
    expect(Calificador(Ideas)).toBe('Fantástico');
});
