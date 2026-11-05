/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let numero = prompt("Introduce un número:");
let numero2 = prompt("Introduce un número:");

let suma = 0;

for (let i = 0; i <= numero2; i++) {

    if (i % 2 == 0) {
        suma = suma + i;

    }
}

console.log("La suma de los numeros pares son: " + suma);
