<?php
// Configuración de la base de datos
$host    = 'localhost';
$db      = 'ventas';
$user    = 'root'; // Cambia esto por tu usuario
$pass    = '';     // Cambia esto por tu contraseña
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
?>