<?php
    include('conexao.php');
    $sql = "SELECT * FROM matricula INNER JOIN disciplina WHERE matricula.horario='".$_POST["horario"]."' and (matricula.codigo_disciplina = disciplina.codigo)";
    $MATRICULA = mysql_query($sql);

    $json_array = array();
    while($row = mysql_fetch_array($MATRICULA)){
        $json_array[] = array(
            "carga_horaria" => $row["carga_horaria"],
            "descricao" => $row["descricao"],
            "credito" => $row["creditos"],
            "codigo_turno" => $row["codigo_turno"],
            "codigo" => $row["codigo_disciplina"],
            "horario" => $row["horario"],
        );
    }
    mysql_close($CONEXAO);
    echo json_encode($json_array);
?>