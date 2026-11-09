
let fecha = new Date();
let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();


document.getElementById("resultado").innerHTML =
    "Año actual: " + anio + "<br>" +
    "Mes actual: " + mes + "<br>" +
    "Día actual: " + dia + "<br>" +
    "Hora actual: " + hora + "<br>" +
    "Minutos actuales: " + minutos + "<br>" +
    "Segundos actuales: " + segundos;