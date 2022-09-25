/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

function Factorial (n:number) {
	let total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
    console.log(total); 
}

Factorial(4);

module.exports = Factorial;