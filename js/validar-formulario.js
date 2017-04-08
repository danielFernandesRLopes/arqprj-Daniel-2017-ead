var validaFormulario = function (agenda, nome, telefone) {
	
	var erros = [];

	if (nome == ""){

		erros.push("O Nome não pode estar em branco;");

	}

	if (nome.length > 200){

		erros.push("O Nome não pode ter mais de 200 caracteres;");

	}

	if (isNaN(telefone)){

		erros.push("O Telefone deve conter apenas numeros;")

	}

	if (telefone.length == ""){

		erros.push("O Telefone não pode estar em branco;")

	}

	if (telefone.length > 25){

		erros.push("O Telefone não deve conter mais de 25 caracteres;")

	}

	if (agenda.getListaContatos().length > 0) {

		agenda.getListaContatos().forEach( function(contato) {
			
			if (contato.nome == nome && contato.telefone == telefone){

				erros.push("Este contato já existe!")

			}

		});


	}

	return erros;
	
}