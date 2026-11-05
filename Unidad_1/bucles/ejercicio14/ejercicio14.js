/*****************************************

Autor: Marcos Molis Zapata

Fecha: 04/11/2026

*************************************/

let opcion = Number(prompt(
    "MENÚ DE PATRONES\n" +
    "1. Cuadrado lleno\n" +
    "2. Cuadrado hueco\n" +
    "3. Tablero de ajedrez\n" +
    "4. Pirámide izquierda\n" +
    "5. Pirámide centrada\n" +
    "6. Pirámide invertida\n" +
    "7. Diamante\n" +
    "Elige una opción:"
));

switch (opcion) {

    case 1:
        document.write("Cuadrado lleno<br>");

        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
        break;


    case 2:
        document.write("Cuadrado hueco<br>");

        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
                if (i == 1 || i == 5 || j == 1 || j == 5) {
                    document.write("*");
                } else {
                    document.write("&nbsp;");
                }
            }
            document.write("<br>");
        }
        break;


    case 3:
        document.write("Tablero de ajedrez<br>");

        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                if ((i + j) % 2 == 0) {
                    document.write("* ");
                } else {
                    document.write("&nbsp;");
                }
            }
            document.write("<br>");
        }
        break;


    case 4:
        document.write("Pirámide izquierda<br>");

        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
        break;


    case 5:
        document.write("Pirámide centrada<br>");

        for (let i = 1; i <= 5; i++) {

            for (let j = 1; j <= 5 - i; j++) {
                document.write("&nbsp;");
            }

            for (let j = 1; j <= (2 * i - 1); j++) {
                document.write("*");
            }

            document.write("<br>");
        }
        break;


    case 6:
        document.write("Pirámide invertida<br>");

        for (let i = 5; i >= 1; i--) {
            for (let j = 1; j <= (2 * i - 1); j++) {
                document.write("*");
            }
            document.write("<br>");
        }
        break;


    case 7:
        document.write("Diamante<br>");

        // Parte superior
        for (let i = 1; i <= 5; i++) {

            for (let j = 1; j <= 5 - i; j++) {
                document.write("&nbsp;");
            }

            for (let j = 1; j <= (2 * i - 1); j++) {
                document.write("*");
            }

            document.write("<br>");
        }

        // Parte inferior
        for (let i = 4; i >= 1; i--) {

            for (let j = 1; j <= 5 - i; j++) {
                document.write("&nbsp;");
            }

            for (let j = 1; j <= (2 * i - 1); j++) {
                document.write("*");
            }

            document.write("<br>");
        }
        break;


    default:
        document.write("Opción no válida");
        break;
}
