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

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Tomar datos del formulario y protegerlos
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $telefono = $conn->real_escape_string($_POST['telefono']);
    $correo = $conn->real_escape_string($_POST['correo']);
    $mensaje = $conn->real_escape_string($_POST['mensaje']);

    // Consulta SQL para insertar los datos
    $sql = "INSERT INTO datos (nombre, telefono, correo, mensaje) 
            VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color:green;'>✅ Datos guardados correctamente</p>";
    } else {
        echo "<p style='color:red;'>❌ Error: " . $conn->error . "</p>";
    }
}

$conn->close();
