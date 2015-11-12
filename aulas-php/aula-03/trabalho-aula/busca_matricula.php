<?php
    include('conexao.php');
    $DISCIPLINA = mysql_query("select * from disciplina where id='".$_POST["id"]."'");
    $ROWDISCIPLINA = mysql_fetch_array($DISCIPLINA);
    $MATRICULA = mysql_query("select * from matricula where codigo_disciplina like '%".$ROWDISCIPLINA["codigo"]."%'");

    $json_array = array();
    while($row = mysql_fetch_array($MATRICULA)){
        $json_array[] = array(
            "carga_horaria" => $ROWDISCIPLINA["carga_horaria"],
            "descricao" => $ROWDISCIPLINA["descricao"],
            "credito" => $ROWDISCIPLINA["creditos"],
            "codigo" => $row["codigo_disciplina"],
            "codigo_turno" => $row["codigo_turno"],
            "horario" => $row["horario"],
        );
    }
    mysql_close($CONEXAO);
    echo json_encode($json_array);
?>
