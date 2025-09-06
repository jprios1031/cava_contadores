<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_datos = "datos_recibidos";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $password, $base_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("❌ Error en la conexión: " . $conn->connect_error);
}
