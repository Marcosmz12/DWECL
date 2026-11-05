/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let numero = prompt("Introduce un número:");

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("Los divisores son: " + i)
    }
}