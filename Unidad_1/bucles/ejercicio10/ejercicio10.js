/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let numero = Number(prompt("Introduce un número:"));

if (numero <= 2 || isNaN(numero)) {
    console.log("Ingrese un numero mayor a dos");
}

let primo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        primo = false;
    }
}


if (primo == true) {
    console.log("Tu numero es primo");
} else {
    console.log("Tu numero no es primo");
}