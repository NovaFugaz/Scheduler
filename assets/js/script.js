// Fecha y semana (por días no semana numeral) actual.
var fechaActual = new Date();
var semanaActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - fechaActual.getDay()); // Sumamos 1 al día de la semana actual para empezar en lunes.
var semanatitulo = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() - fechaActual.getDay() + 1);
// Cabecera del horario
document.getElementById("semanatitulo").innerHTML = "Semana del " + semanatitulo.toLocaleDateString();

// Declaro la variable "Cuerpo del horario (horariocpo)"
var horariocpo = document.getElementById("horariocpo");
var fechatab = horariocpo.insertRow(0); 

// Añadir la cabecera que dice hora / fecha, porque si no se genera la fecha en el 15:00, xD.
var horacab = document.createElement("th"); 
horacab.innerHTML = "Hora / Fecha";
fechatab.appendChild(horacab);

var lunes = new Date(semanaActual); // Defino una variable (lunes porque inicio de semana) y creo un nuevo objeto fecha con la semana actual, modificando el de arriba.
lunes.setDate(lunes.getDate() + 1); // Básicamente estoy tomando esa variable y la estoy ciclando para que genere una nueva semana cada vez que se genera.
for (var i = 0; i < 7; i++) {
  var celdafecha = document.createElement("th");
  celdafecha.innerHTML = lunes.toLocaleDateString();
  fechatab.appendChild(celdafecha);
  lunes.setDate(lunes.getDate() + 1);
}

//Lleno la tabla con las celdas de tiempo y texto y les añado la class celda-evento y les declaro un toggle y un target para que abran el modal.
var horariocpo = document.getElementById("horariocpo");
for (var i = 15; i <= 20; i++) {
  var row = document.createElement("tr");
  var celdahora = document.createElement("td");
  var timeText = document.createTextNode(i + ":00");
  celdahora.appendChild(timeText);
  row.appendChild(celdahora);
  for (var j = 0; j < 7; j++) {
    var celdaevto = document.createElement("td");
    var textoevnt = document.createTextNode("");
    celdaevto.appendChild(textoevnt);
    celdaevto.classList.add("celda-evento");
    celdaevto.setAttribute("data-toggle", "modal");
    celdaevto.setAttribute("data-target", "#ModalAgenda");
    row.appendChild(celdaevto);
  }
  horariocpo.appendChild(row);
}
// Actualiza el horario, aunque todavía no está listo.

function actualizar() {
  document.getElementById("semanatitulo").innerHTML = "Semana del " + semanatitulo.toLocaleDateString();
  var lunes = new Date(semanaActual);
  lunes.setDate(lunes.getDate() + 1);
  for (var i = 0; i < 7; i++) {
    var column = i + 1;
    var celdafecha = document.getElementById("horariocpo").rows[0].cells[column];
    celdafecha.innerHTML = lunes.toLocaleDateString();
    lunes.setDate(lunes.getDate() + 1);
  }
}

actualizar();

// Cuando se clica el botón de semana anterior y próxima

document.getElementById("semanaAnt").addEventListener("click", function() {
  semanaActual.setDate(semanaActual.getDate() - 7);
  semanatitulo.setDate(semanatitulo.getDate() - 7);
  actualizar();
});

document.getElementById("semanaProx").addEventListener("click", function() {
  semanaActual.setDate(semanaActual.getDate() + 7);
  semanatitulo.setDate(semanatitulo.getDate() + 7);
  actualizar();
});