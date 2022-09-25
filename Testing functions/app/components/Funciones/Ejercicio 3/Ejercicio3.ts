/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 * 
*/

 function Ordenar() {
   let Letras : any[] = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];

   let Letras1 = Letras[0].sort();
   let Letras2 = Letras[1].sort();
   let Letras3 = Letras[2].sort();

   let LetrasConcat = [Letras1, Letras2, Letras3];
   let Ordenadas = LetrasConcat.sort();
   console.log(Ordenadas);

   return Ordenadas;
 }

 module.exports = Ordenar;