<?php
  try{
    // creamos la conexión
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Creamos la consulta para traer los datos de la db

    $rq = $pdo->query("SELECT * FROM empleados");
    $resultado = $rq->fetchAll();
    
  }catch (\PDOException $e){
    die("Error de conexión: " . $e->getMessage())
  }
?>