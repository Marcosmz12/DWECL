
let fechaHoy = new Date();


let fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);


let fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);
fecha85.setFullYear(fecha85.getFullYear() + 2);
fecha187.setHours(fecha187.getHours() - 24);

let fechaResto = fecha85 - fecha187;

document.getElementById("resultado").innerHTML =
    "a) Fecha de hoy: " + fechaHoy + "<br><br>" +
    "b) Fecha de hoy + 85 días: " + fecha85 + "<br><br>" +
    "c) Fecha de hoy - 187 días: " + fecha187 + "<br><br>" +
    "d) Fecha85 + 2 años: " + fecha85 + "<br><br>" +
    "e) Fecha187 - 24 horas: " + fecha187 + "<br><br>" +
    "f) Resta fecha85 - fecha187: " + fechaResto;
