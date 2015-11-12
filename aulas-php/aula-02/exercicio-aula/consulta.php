<?php
    function consultar(){
        echo "<table class='table table-bordered' summary = \"Tabela de Clientes\">";
        echo "<caption><strong>Tabela de Clientes</strong></caption>";
        echo "<thead>";
        echo "<tr> ";
        echo "<th>Código</th>";
        echo "<th>Nome</th>";
        echo "<th>Fone</th>";
        echo "<th>Data de Cadastramento</th>";
        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";

        include("conexao.php");

        $resultado = mysqli_query($conexao,"SELECT * FROM clientes");
        $linhas = mysqli_num_rows($resultado);
        while ($row = mysqli_fetch_array($resultado)){
                $id = $row['id'];
                $nome = $row['nome'];
                $fone = $row['fone'];
                $data_cadastramento = $row['data_cadastramento'];

                echo "<tr>";
                echo "<td>" .$id ."</td>";
                echo "<td>" .$nome ."</td>";
                echo "<td>" .$fone ."</td>";
                echo "<td>" .$data_cadastramento ."</td>";
        }
        echo "</tbody>";
        echo "</table>";
        mysqli_close($conexao);
    }
?>