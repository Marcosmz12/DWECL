/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let contraseña;
do {
    console.log("Introduzca una contraseña: ");
    contraseña = "1111";
    console.log("Contraseña incorrecta, vuelva a intentarlo");

    contraseña = "1234";
    
} while (contraseña != "1234"){
    console.log("Contraseña correcta, acceso permitido");
}