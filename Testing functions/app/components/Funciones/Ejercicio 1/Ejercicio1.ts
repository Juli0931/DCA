/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 * 
*/

let arrayA: any[] = ["h", "a", "c"];
let arrayB: any[] = [7, 4, 17, 10, 48];

function Combinar(arrayA: any, arrayB: any){
  
  let size_array = arrayA.length + arrayB.length
  let arrayC: any[] = [];
  for (let i = 0; i < size_array; i++) {
      if(arrayA[i] !== undefined){
          arrayC.push(arrayA[i]);
      }
      if(arrayB[i] !== undefined){
          arrayC.push(arrayB[i]);
      }
  }
  return arrayC;
}

console.log(Combinar(arrayA, arrayB));

module.exports = Combinar;