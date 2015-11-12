	function executaPost(formulario, acao){
			var controleEscondido = document.getElementById('id_acao');// Captura a id "action" - campo oculto
			var formulario = document.getElementById(formulario); // Captura a id "formulario" (form)
	
			controleEscondido.value = acao; //atribui o parâmetro da função ao campo oculto 
			formulario.submit(); //envia os dados do formulario com o campo oculto setado - troca o valor do campo oculto pelo parÂmetro (salvar ou consultar)
			formulario.reset();
	}