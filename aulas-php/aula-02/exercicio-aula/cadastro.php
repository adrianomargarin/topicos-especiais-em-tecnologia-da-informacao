<?php
    include("conexao.php");

    $nome = $_POST["nome"];
    $fone = $_POST["fone"];
    $data_cadastramento = $_POST["data_cadastramento"];

    $sql = "INSERT INTO clientes (nome, fone, data_cadastramento) VALUES ";
    $sql = $sql ."('$nome', '$fone', '$data_cadastramento');";

    mysqli_query($conexao, $sql);
    mysqli_close($conexao);

    header("Location: index.php");
?>