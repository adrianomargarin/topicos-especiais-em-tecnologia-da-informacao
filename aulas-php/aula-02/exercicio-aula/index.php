<!DOCTYPE html>
<html>
   <head>
	  <meta charset="utf-8">
      <title>Exercício 01 - Adriano Margarin</title>
      <link rel="stylesheet" type="text/css" href="static/css/bootstrap.min.css">
	</head>
	<body>
        <nav class="navbar navbar-default">
            <div class="container">
                <p class="navbar-text">Exercício 01 - Adriano Margarin</p>
            </div>
        </nav>

        <div class="row">
            <div class="container">
                <?php
                    include("consulta.php");
                    consultar();
                ?>
                <a href="cadastro.html" type="button" class="btn btn-success">Cadastrar Novo</a>
            </div>
        </div>
        <script type="text/javascript" href="static/jquery.min.js"></script>
        <script type="text/javascript" href="static/bootstrap.min.js"></script>
	</body>
</html>