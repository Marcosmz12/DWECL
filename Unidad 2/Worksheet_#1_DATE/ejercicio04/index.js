
let segundos = 60;

function contarAtras() {

    document.getElementById("contador").innerHTML = segundos;

    if (segundos > 0) {
        segundos--;

        setTimeout(contarAtras, 1000);
    } else {
        location.href = "https://www.google.com";
    }
}


contarAtras();
