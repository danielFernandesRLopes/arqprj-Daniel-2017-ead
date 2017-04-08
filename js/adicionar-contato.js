var botao = document.querySelector("#adicionar-contato");
var agenda = new Agenda();
agenda.setListaContatos();	

botao.addEventListener("click", (function(event) {
	
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var erros = validaFormulario(agenda, form.nome.value, form.telefone.value);

	if (erros.length > 0){

		var listaErros = document.querySelector("#erros-form");
		listaErros.innerHTML = "";

		erros.forEach( function(erro) {

			var li = document.createElement("li");
			li.style.color = "red";
			li.textContent = erro;
			listaErros.appendChild(li);

		});

		return;


	}else{

	agenda.adicionarContato(form.nome.value, form.telefone.value);

	var contatosTabela = document.querySelector("#contatos");

	contatosTabela.innerHTML = "";

	agenda.getListaContatos().forEach( function(contato) {
		
		var contatoTr = document.createElement("tr");
		var nomeTd = document.createElement("td");
		var telefoneTd = document.createElement("td");

		var nome = contato.nome;
		var telefone = contato.telefone;

		nomeTd.textContent = nome;
		telefoneTd.textContent = telefone;

		contatoTr.appendChild(nomeTd);
		contatoTr.appendChild(telefoneTd);

		contatosTabela.appendChild(contatoTr);

	});

	form.nome.value = "";
	form.telefone.value = "";


	};

}));