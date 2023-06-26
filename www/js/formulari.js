// Inicializar el mapa
var map = L.map('map').setView([41.3851, 2.1734], 12);

// Agregar un mapa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




// Agregar un marcador en la ubicación actual
var marker = L.marker([41.3851, 2.1734]).addTo(map);

// Actualizar la ubicación del marcador y los valores de latitud y longitud en los cuadros de texto del formulario cuando se hace clic en el mapa
map.on('click', function(e) {
  marker.setLatLng(e.latlng);
  document.getElementById('latitud').value = e.latlng.lat.toFixed(6);
  document.getElementById('longitud').value = e.latlng.lng.toFixed(6);


/*  FA PRINT DE LA LATITUD (FER UNA VARIABLE QUE UTILITZI LA LATITUD I LA LONGITUD???)
  console.log(e.latlng.lat.toFixed(6)) */

});





//SCRIPT PARA ENVIAR LA INFORMACIÓN DEL FORMULARIO A LA TABLA EN EL HOSTING

$(document).ready(function() {
  $('#miFormulario').submit(function(event) {
    // Evitamos que el formulario se envíe de forma convencional
    event.preventDefault();

    // Obtenemos los valores de los campos
    var descripcio = $('#descripcio').val();
    var opcions = $('#opcions').val();
    var imagen = $('input[name="imagen"]')[0].files[0];   
    var latitud = $('#latitud').val();
    var longitud = $('#longitud').val();
    var nom = $('#nom').val();
    var correu = $('#correu').val();
    var rgpd = $('#rgpd').is(':checked') ? 'SI' : 'NO';
    var rebre_info = $('#rebre_info').is(':checked') ? 'SI' : 'NO';


    // Creamos un objeto FormData para enviar los datos al servidor
    var formData = new FormData();
    formData.append('descripcio', descripcio);
    formData.append('opcions', opcions);
    formData.append('imagen', imagen);
    formData.append('latitud', latitud);
    formData.append('longitud', longitud);
    formData.append('nom', nom);
    formData.append('correu', correu);
    formData.append('rgpd', rgpd);
    formData.append('rebre_info', rebre_info);


    // Realizamos la petición AJAX al servidor
    $.ajax({
      url: 'https://catalunyacamina.000webhostapp.com/guardar_datos.php',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,

      success: function(data) {
        // Si la petición fue exitosa, mostramos un mensaje al usuario
        alert('Dades guardades correctament');
      },
      error: function() {
        // Si ocurrió un error, mostramos un mensaje de error
        alert('Ha ocorregut un error al guardar les dades');
      }
    });
  });
});