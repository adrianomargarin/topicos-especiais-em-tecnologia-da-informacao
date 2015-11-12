<?php
    $CONEXAO = mysqli_connect("localhost", "root", "root", "aula_02") or die("ERRO DE CONEXAO");
    mysqli_query($CONEXAO, "set names 'utf8'");
    $RESULTADO = mysqli_query($CONEXAO, "SELECT * FROM clientes");

    while($ROW = mysqli_fetch_array($RESULTADO)){
        $ID = $ROW['id'];
        $NOME = $ROW['nome'];
        $FONE = $ROW['fone'];
        $DATA_CADASTRAMENTO = $ROW['data_cadastramento'];
        echo $ID ." " .$NOME ." " .$FONE ." " .$DATA_CADASTRAMENTO ."<br>";
    }
    mysqli_close($CONEXAO);
?>