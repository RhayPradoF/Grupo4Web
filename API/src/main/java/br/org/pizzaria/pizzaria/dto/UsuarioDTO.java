package br.org.pizzaria.pizzaria.dto;

import br.org.pizzaria.pizzaria.domain.Usuario;



public class UsuarioDTO {

	private Long id;
	
	private String nome;
	
	private String email;
	
	private String cpf; 
	
	private String senha;
	

	
	public UsuarioDTO() {
		
	}
		
	public UsuarioDTO(Long id, String nome, String email, String cpf) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.cpf =cpf;
		
	}

	public UsuarioDTO(Usuario usuario) {
		
		this.id = usuario.getId();
		this.nome = usuario.getNome();
		this.email = usuario.getEmail();
		this.senha =usuario.getSenha();
		
		this.cpf = usuario.getCpf();
		
	
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
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
	
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}


	
}