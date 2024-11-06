package br.org.pizzaria.pizzaria.dto;


public class UsuarioInserirDTO {

	private String nome;
	private String email;
	private String senha;
	private String cpf;
	private String confirmaSenha;
	//private Set<Perfil> perfis;
	
		
	public UsuarioInserirDTO() {
		
	}
	
	
	
	public String getNome() {
		return nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getConfirmaSenha() {
		return confirmaSenha;
	}

	public void setConfirmaSenha(String confirmaSenha) {
		this.confirmaSenha = confirmaSenha;
	}


}
