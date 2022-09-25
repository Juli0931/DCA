const CalificadorFn = require('./Ejercicio8');

test('Falló', () =>{
    let Ideas: string[] = [];
    expect(Calificador(Ideas)).toBe('Falló');
});

test('Publicar', () =>{
    let Ideas: string[] = [];
    expect(Calificador(Ideas)).toBe('Publicar');
});

test('Fantástico', () =>{
    let Ideas: string[] = [];
    expect(Calificador(Ideas)).toBe('Fantástico');
});