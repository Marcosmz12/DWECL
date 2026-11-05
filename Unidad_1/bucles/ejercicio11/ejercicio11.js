/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/


let n = Number(prompt("Introduce un número: "));

let suma = 0;

for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        suma = suma + i;
    }
}

if (suma == n) {
    console.log("El número es perfecto");
} else {
    console.log("El número no es perfecto");
}