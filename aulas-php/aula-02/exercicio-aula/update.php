<?php
    include("conexao.php");

    $nome = $_POST["nome"];
    $fone = $_POST["fone"];
    $data_cadastramento = $_POST["data_cadastramento"];

    $sql = "UPDATE clientes SET";
    $sql = $sql ." nome='" .$nome ."',";
    $sql = $sql ." fone='" .$fone ."',";
    $sql = $sql ." data_cad='" .$data_cadastramento ."'";
    $sql = $sql ." WHERE id = " .$id;

    mysqli_query($conexao, $sql);
    mysqli_close($conexao);

    header("Location: index.php");
?>