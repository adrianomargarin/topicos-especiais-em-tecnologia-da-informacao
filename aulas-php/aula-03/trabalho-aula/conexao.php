<?php
    // $CONEXAO = mysql_connect("localhost", "amargarin", "topicos") or die("ERRO DE CONEXAO");
    $CONEXAO = mysql_connect("localhost", "root", "root") or die("ERRO DE CONEXAO");
    mysql_query("set names 'utf8'",$CONEXAO);
    mysql_select_db("trabalho_php_1", $CONEXAO);
    // mysql_select_db("amargari_trabalho_php_1", $CONEXAO);
?>