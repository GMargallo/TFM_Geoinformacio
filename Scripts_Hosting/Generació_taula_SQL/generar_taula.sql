CREATE TABLE `tabla` (
  `id` int(6) UNSIGNED NOT NULL,
  `descripcio` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `opcions` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `latitud` float(10,6) NOT NULL,
  `longitud` float(10,6) NOT NULL,
  `fecha_registro` date NOT NULL DEFAULT current_timestamp()
);
