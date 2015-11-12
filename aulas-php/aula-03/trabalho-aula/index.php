<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Trabalho PHP - Adriano Margarin</title>
        <link rel="stylesheet" type="text/css" href="static/css/bootstrap.min.css">
        <script type="text/javascript" src="static/js/jquery.min.js"></script>
        <script type="text/javascript" src="static/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="static/js/trabalho.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container">
                <p class="navbar-text">Trabalho PHP - Adriano Margarin</p>
            </div>
        </nav>

        <div class="row">
            <div class="container">
                <div class="col-md-6 col-md-offset-3">
                    <form class="form" id="id_busca_turma">
                        <select class="form-control" name="disciplina" id="id_disciplina">
                            <option value="">Selecione uma disciplina</option>
                            <?php
                                include('conexao.php');
                                $RESULT = mysql_query("SELECT * FROM disciplina");
                                while($row = mysql_fetch_array($RESULT)){
                                    echo '<option value="'.$row["id"].'">'.$row["descricao"].'</option>';
                                }
                                mysql_free_result($RESULT);
                                mysql_close($CONEXAO);
                            ?>
                        </select>
                    </form>
                </div>
                <hr>
                <div class="col-md-6 col-md-offset-3">
                    <table id="id_resultado_matricula" class="table table-bordered ">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Disciplina</th>
                                <th>Crédito</th>
                                <th>Carga Horária</th>
                                <th>Horário</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            <div class="container">
                <div class="col-md-6 col-md-offset-3">
                    <form class="form" id="id_busca_turma">
                        <select class="form-control" name="horario" id="id_horario">
                            <option value="">Selecione um horário</option>
                            <?php
                                include('conexao.php');
                                $RESULT = mysql_query("SELECT DISTINCT horario horario FROM matricula ORDER BY horario");
                                while($row = mysql_fetch_array($RESULT)){
                                    echo '<option value="'.$row["horario"].'">'.$row["horario"].'</option>';
                                }
                                mysql_free_result($RESULT);
                                mysql_close($CONEXAO);
                            ?>
                        </select>
                    </form>
                </div>
                <hr>
                <div class="col-md-6 col-md-offset-3">
                    <table id="id_resultado_codigo" class="table table-bordered ">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Disciplina</th>
                                <th>Crédito</th>
                                <th>Carga Horária</th>
                                <th>Horário</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>