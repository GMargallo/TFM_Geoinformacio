<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json; charset=utf-8');

$mysqli = new mysqli('localhost', 'id20596124_catalunyacamina', '\3-mcTvaa5pyEu^v', 'id20596124_incidents') or die ("No puc connectar-me");
$mysqli->set_charset("utf8");

$query = "select * from tabla order by fecha_registro desc";
$result = $mysqli->query($query);

$myarray = array();
while ($row = $result->fetch_object()) {
  $myarray[] = $row;
}

echo json_encode($myarray);

$mysqli->close();
?>