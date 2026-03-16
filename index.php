

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro a PHP</title>
</head>
<body>
    <h2>LISTA DE EMPLEADOS</h2>
    <table>
        <thead>
            <th>ID EMPLEADO</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>DEPARTAMENTO</th>
            <th>SALARIO</th>
        </thead>
        <tbody>
            <?php foreach ($resultado as $fila): ?>
            <tr>
                <td> <?php echo htmlspecialchars($fila['id_empleados']) ?> </td>
                <td> <?php echo htmlspecialchars($fila['nombre_empleado']) ?> </td>
                <td> <?php echo htmlspecialchars($fila['apellido_empleado']) ?> </td>
                <td> <?php echo htmlspecialchars($fila['departamento_empleado']) ?> </td>
                <td> <?php echo htmlspecialchars($fila['salario_empleado']) ?> </td>
            </tr>
            <?php  endforeach; ?>
        </tbody>
    </table>
</body>
</html>