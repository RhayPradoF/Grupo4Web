package br.org.pizzaria.pizzaria.domain;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Produtos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String sabor;

	private String descricao;

	private Double precoP;

	private Double precoM;

	private Double precoG;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "id_categoria")
	private Categoria categoria;

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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produtos other = (Produtos) obj;
		return Objects.equals(id, other.id);
	}

}
