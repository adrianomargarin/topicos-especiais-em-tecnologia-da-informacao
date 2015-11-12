<?php
    include('conexao.php');
    $sql = "SELECT * FROM disciplina INNER JOIN matricula WHERE disciplina.id='".$_POST["id"]."' and (disciplina.codigo = matricula.codigo_disciplina)";
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
