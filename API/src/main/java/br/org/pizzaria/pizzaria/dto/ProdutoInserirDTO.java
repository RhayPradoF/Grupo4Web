package br.org.pizzaria.pizzaria.dto;

import br.org.pizzaria.pizzaria.domain.Produtos;

public class ProdutoInserirDTO {

	private String tamanho;
	
	private String sabor;

	private String descricao;

	private Double preco;
	
	private Long idCategoria;
	
	public ProdutoInserirDTO(){}
	
	public ProdutoInserirDTO(Produtos produtos) {
		this.tamanho = produtos.getTamanho();
		this.sabor = produtos.getSabor();
		this.descricao = produtos.getDescricao();
		this.preco = produtos.getPreco();
		this.idCategoria = produtos.getCategoria().getId();
	}

	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}

	public String getSabor() {
		return sabor;
	}

	public void setSabor(String sabor) {
		this.sabor = sabor;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public Long getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}
	
}
