var IContatoDAO = function (contato) {


	this.adicionarContatoDAO = function(contato){

		var contatoDAO = new ContatoDAO();
		contatoDAO.adicionarContato(contato);

	}

	this.listarContatosDAO = function(){

		var contatoDAO = new ContatoDAO();
		return contatoDAO.listarContatos();		

	}

	this.filtrarContatoDAO = function(nome){

		var contatoDAO = new ContatoDAO();
		return contatoDAO.filtrarContato(nome);		

	}
	
}

