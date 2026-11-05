/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let n = Number(prompt("¿Cuántos números perfectos quieres mostrar? "));

let contador = 0;
let numero = 1;

while (contador < n) {

    let suma = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i == 0) {
            suma = suma + i;
        }
    }

    if (suma == numero) {
        console.log(numero);
        contador++;
    }

    numero++;
}