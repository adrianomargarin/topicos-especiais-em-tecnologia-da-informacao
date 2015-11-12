<!DOCTYPE html>
<html>
   <head>
	  <meta charset="utf-8">
      <title>Consulta de Clientes</title>

      <link rel="stylesheet" type="text/css" href="../static/css/bootstrap.min.css">
	</head>
	<body>
        <nav class="navbar navbar-default">
            <div class="container">
                <p class="navbar-text">Aula 02</p>
            </div>
        </nav>
        <div class="row">
            <div class="container">
				<?php
					//pega o nome da função que foi passada para o campo hidden
					$funcao = $_REQUEST["acao"]; //$funcao vai receber "consultar" ou "salvar"

					if(function_exists($funcao)){ //Se existe a função "consultar" ou a função "salvar"
						call_user_func($funcao); //Chama a função
					}

					function salvar(){
						$nome = $_POST["nome"];
						$fone = $_POST["fone"];
						$data_cadastramento = $_POST["data_cadastramento"];

						echo "Salvando: " .$nome .", " .$fone .", " .$data_cadastramento ."<br />";

						//conexão com o banco de dados
						$conexao = mysqli_connect("localhost","root","root","aula_02") or die("Erro de conexão");

						$sql = "INSERT INTO clientes (nome,fone,data_cadastramento) VALUES ";
						$sql = $sql ."('$nome','$fone','$data_cadastramento');";

						echo "Instrução: " .$sql ."<br>";

						$resultado=mysqli_query($conexao, $sql);

						echo "Resultado= " .$resultado ."<br>";
						if($resultado == 1){
						    echo "Inserção OK!" ."<br>";
						}
						else{
							echo "Não foi possível inserir!" ."<br>";
						}
						mysqli_close($conexao);
						echo "<a href=\"javascript:history.go(-1)\">VOLTAR</a>";
					}

					function consultar(){
						echo "<div id=\"tabela\">";
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

						// conexão com o banco de dados
						$conexao = mysqli_connect("localhost","root","root","aula_02") or die("Erro de conexão");
						mysqli_query($conexao,"set names 'utf8'");

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
						echo "</div>";
						echo "Linhas Retornadas: $linhas" ."<br/>";
						mysqli_close($conexao);
						echo "<a type='button' class='btn btn-primary' href=\"javascript:history.go(-1)\">VOLTAR</a>";
					}
				?>
            </div>
        </div>
        <script type="text/javascript" href="../static/jquery.min.js"></script>
        <script type="text/javascript" href="../static/bootstrap.min.js"></script>
	</body>
</html>