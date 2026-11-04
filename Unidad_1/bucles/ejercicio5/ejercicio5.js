/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/


let numero = prompt("Introduce un número: ");

while (isNaN(numero) || numero == "") {
    numero = prompt("Introduce un número válido: ");
}

let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma = suma + Number(numero[i]);
}

console.log("La suma de los dígitos es: " + suma);