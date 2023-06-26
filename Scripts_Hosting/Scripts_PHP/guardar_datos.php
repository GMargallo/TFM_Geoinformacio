<?php
header("Access-Control-Allow-Origin: *");
// Establecemos la conexión con la base de datos
$conexion = mysqli_connect('localhost', 'id20596124_catalunyacamina', '\3-mcTvaa5pyEu^v', 'id20596124_incidents'); 

// Obtenemos los valores enviados por el formulario
$descripcio = $_POST['descripcio'];
$opcions = $_POST['opcions'];
$imagen = $_FILES['imagen'];
$latitud = $_POST['latitud'];
$longitud = $_POST['longitud'];
$nom = $_POST['nom'];
$correu = $_POST['correu'];
$rgpd = $_POST['rgpd'];
$rebre_info = $_POST['rebre_info'];

// Guardamos la imagen en la carpeta uploads
$nombre_archivo = $imagen['name'];
$ruta_archivo = 'uploads/' . $nombre_archivo;
move_uploaded_file($imagen['tmp_name'], $ruta_archivo);

// Guardamos los datos en la tabla de la base de datos
$query1 = "INSERT INTO tabla (descripcio, opcions, imagen, latitud, longitud) VALUES ('$descripcio', '$opcions', '$nombre_archivo', '$latitud', '$longitud')";
$resultado1 = mysqli_query($conexion, $query1);


// Verificamos si la consulta fue exitosa
if $resultado1 {
  echo "Datos guardados correctamente";
} else {
  echo "Ocurrió un error al guardar los datos";
}

// Cerramos la conexión con la base de datos
mysqli_close($conexion);
?> 