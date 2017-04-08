var Agenda = function () {

	this.adicionarContato = function(nome, telefone){
	
		this.contato = new Contato();
		this.contato.setNome(nome);
		this.contato.setTelefone(telefone);

		this.iContatoDAO = new IContatoDAO();
		this.iContatoDAO.adicionarContatoDAO(this.contato);

	}

	this.setListaContatos = function(){

		this.iContatoDAO = new IContatoDAO();
		this.listaContatos = this.iContatoDAO.listarContatosDAO();

	}

	this.getListaContatos = function(){

		return listaContatos;

	}

	this.filtrarContato = function(nome){

		this.iContatoDAO = new IContatoDAO();
		this.listaFiltro = this.iContatoDAO.filtrarContatoDAO(nome);
		return this.listaFiltro;

	}

}

