$(document).ready(function() {
// Para que se abra el modal con cada celda y añada la clase "clicked" a la celda. Primero revisa si la celda tiene la class "taken", de hora tomada.
    $(document).on("click", ".celda-evento", function() {
        if ($(this).hasClass('taken')) {
      alert("Esta hora está tomada.");
        }else{
      $(this).addClass('clicked');
      $("#ModalAgenda").modal("show");
    }
  });
// Para que se cierre con el botón de cerrar, la x y el agendar
    $(document).on("click", ".close", function() {
      $("#ModalAgenda").modal("hide");
      $('.clicked').removeClass('clicked');
    });

    $(document).on("click", ".cerrar", function() {
        $("#ModalAgenda").modal("hide");
        $('.clicked').removeClass('clicked');
      });

    $(document).on("click", ".agendar", function() {
        $("#ModalAgenda").modal("hide");
    });

    $(document).on('keydown', function(event) {
      if (event.keyCode == 27) {
        $("#ModalAgenda").modal("hide");
        $('.clicked').removeClass('clicked');
      }
    });

// Para añadir el "hora tomada" a la celda clickeada
    $(".agendar").on('click', function() {
        var nombre = $('#Nombre').val().trim();
        var correo = $('#Correo').val().trim();
        if(nombre === ""){
          alert('El campo "Nombre" es obligatorio.');
        } else if(correo === ""){
          alert('El campo "Correo Electrónico" es obligatorio.');
        } else{
            alert(`Muchas gracias, ${nombre}. Se ha recibido su solicitud. Se le enviará una copia de su reserva de hora al correo: ${correo}.`);
            $('.clicked').text('Hora Tomada');
            $('.clicked').addClass('table-danger');
            $('.clicked').addClass('taken');
            $('.clicked').removeClass('clicked');
}
  });

  $("#semanaAnt, #semanaProx").on("click", function() {
    $(".clicked").removeClass("clicked");
    $("td.taken").text("");
    $(".taken").removeClass("table-danger");
    $(".taken").removeClass("taken");

  });

});