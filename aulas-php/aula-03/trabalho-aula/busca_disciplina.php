<?php
    include('conexao.php');
    $MATRICULA = mysql_query("select * from matricula where id='".$_POST["id"]."'");
    $ROWMATRICULA = mysql_fetch_array($MATRICULA);
    $DISCIPLINA = mysql_query("select * from disciplina where codigo like '%".$ROWMATRICULA["codigo_disciplina"]."%'");

    // var_dump(mysql_fetch_array($DISCIPLINA));
    $json_array = array();
    while($row = mysql_fetch_array($DISCIPLINA)){
        $json_array[] = array(
            "carga_horaria" => $row["carga_horaria"],
            "descricao" => $row["descricao"],
            "credito" => $row["creditos"],
            "codigo_turno" => $ROWMATRICULA["codigo_turno"],
            "codigo" => $ROWMATRICULA["codigo_disciplina"],
            "horario" => $ROWMATRICULA["horario"],
        );
    }
    mysql_close($CONEXAO);
    echo json_encode($json_array);
?>