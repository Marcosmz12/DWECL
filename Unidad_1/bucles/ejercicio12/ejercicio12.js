/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let n = Number(prompt("¿Cuántos números primos quieres mostrar? "));

let contador = 0;
let numero = 2;

while (contador < n) {

    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
        }
    }

    if (primo == true) {
        console.log(numero);
        contador++;
    }

    numero++;
}