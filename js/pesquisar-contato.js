var barraPesquisa = document.querySelector("#filtrar-tabela");

barraPesquisa.addEventListener( "input", function () {
	
	var nome = this.value;

	var pesquisaTable = document.querySelector("#pesquisa-contatos")

	pesquisaTable.innerHTML = "";

	var listaPequisa = agenda.filtrarContato(nome);	

	if ( listaPequisa.length > 0 ){
	
			listaPequisa.forEach( function(contato) {
		
			var contatoTr = document.createElement("tr");
			var nomeTd = document.createElement("td");
			var telefoneTd = document.createElement("td");

			var nome = contato.nome;
			var telefone = contato.telefone;

			nomeTd.textContent = nome;
			telefoneTd.textContent = telefone;

			contatoTr.appendChild(nomeTd);
			contatoTr.appendChild(telefoneTd);

			pesquisaTable.appendChild(contatoTr);


		});
		
	}
		
	console.log(listaPequisa);

});