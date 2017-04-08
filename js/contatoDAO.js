var ContatoDAO = function() {

	this.adicionarContato = function(contato){

		listaContatos.push(contato);
		console.log(contato);
			
	}

	this.listarContatos = function(){

		return listaContatos;

	}

	this.filtrarContato = function(nome){

		var listaFiltro = [];

		listaContatos.forEach( function(contato) {
			
		if (nome == contato.nome){

				listaFiltro.push(contato);

			}

		});
		
		return listaFiltro;

	}

	this.existeContatoDAO = function(nome){

		if (this.filtrarContato(nome).length > 0){

			return true;

		}else {
			
			return false;

		}
	
	}

}

