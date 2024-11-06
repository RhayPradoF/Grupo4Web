package br.org.pizzaria.pizzaria.dto;

import br.org.pizzaria.pizzaria.domain.Produtos;

public class ProdutoDTO {
	private Long id;
	
	private String sabor;

	private String descricao;

	private Double precoP;

	private Double precoM;

	private Double precoG;

	private Long idCategoria;

	public ProdutoDTO() {
	}
	
	public ProdutoDTO(Produtos produtos) {
		this.sabor = produtos.getSabor();
		this.descricao = produtos.getDescricao();
		this.precoP = produtos.getPrecoP();
		this.precoM = produtos.getPrecoM();
		this.precoG = produtos.getPrecoG();
		this.idCategoria = produtos.getCategoria().getId();
		this.id = produtos.getId();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Double getPrecoP() {
		return precoP;
	}

	public void setPrecoP(Double precoP) {
		this.precoP = precoP;
	}

	public Double getPrecoM() {
		return precoM;
	}

	public void setPrecoM(Double precoM) {
		this.precoM = precoM;
	}

	public Double getPrecoG() {
		return precoG;
	}

	public void setPrecoG(Double precoG) {
		this.precoG = precoG;
	}

	public Long getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}

	
}
