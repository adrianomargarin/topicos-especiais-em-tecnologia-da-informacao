<!DOCTYPE html>
<html>
    <head>
        <title>Aula 02 PHP</title>
        <meta charset="utf-8">

        <link rel="stylesheet" type="text/css" href="static/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="static/css/bootstrap-theme.min.css">

    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container">
                <p class="navbar-text">Aula 02</p>
            </div>
        </nav>

        <div class="row">
            <div class="container">
                <table class="table table-bordered">
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Fone</th>
                        <th>Data Cadastramento</th>
                    </thead>
                    <tbody>
                        <?php
                            $CONEXAO = mysqli_connect("localhost", "root", "root", "aula_02") or die("ERRO DE CONEXAO");
                            mysqli_query($CONEXAO, "set names 'utf8'");
                            $RESULTADO = mysqli_query($CONEXAO, "SELECT * FROM clientes");

                            while($ROW = mysqli_fetch_array($RESULTADO)){
                                echo "<tr>";
                                echo "<td>". $ROW['id'] ."</td>";
                                echo "<td>". $ROW['nome'] ."</td>";
                                echo "<td>". $ROW['fone'] ."</td>";
                                echo "<td>". $ROW['data_cadastramento'] ."</td>";
                                echo "</tr>";
                            }
                            mysqli_close($CONEXAO);
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <script type="text/javascript" href="static/jquery.min.js"></script>
        <script type="text/javascript" href="static/bootstrap.min.js"></script>
    </body>
</html>