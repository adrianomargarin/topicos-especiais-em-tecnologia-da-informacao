<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>BemVindo!</title>

        <link rel="stylesheet" type="text/css" href="static/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="static/css/bootstrap-theme.min.css">

    </head>
    <body>
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h3>Bem-Vindo</h3>
                <p><strong><?php echo $_POST["nome"] . " " . $_POST["sobrenome"];?></strong></p>
                <p>Seu e-email é: <strong><?php echo $_POST["email"]; ?></strong></p>

                <a type="button" class="btn btn-primary" href="index.html">Voltar</a>
            </div>
        </div>

        <script type="text/javascript" href="static/jquery.min.js"></script>
        <script type="text/javascript" href="static/bootstrap.min.js"></script>
   </body>
</html>