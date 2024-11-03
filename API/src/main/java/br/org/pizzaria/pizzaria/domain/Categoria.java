package br.org.pizzaria.pizzaria.domain;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String salgado;

	private String doce;

	private String sobremesa;

	private String bebida;

	private String bebidaAlcoolica;

	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
	private List<Produtos> produtos;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSalgado() {
		return salgado;
	}

	public void setSalgado(String salgado) {
		this.salgado = salgado;
	}

	public String getDoce() {
		return doce;
	}

	public void setDoce(String doce) {
		this.doce = doce;
	}

	public String getSobremesa() {
		return sobremesa;
	}

	public void setSobremesa(String sobremesa) {
		this.sobremesa = sobremesa;
	}

	public String getBebida() {
		return bebida;
	}

	public void setBebida(String bebida) {
		this.bebida = bebida;
	}

	public String getBebidaAlcoolica() {
		return bebidaAlcoolica;
	}

	public void setBebidaAlcoolica(String bebidaAlcoolica) {
		this.bebidaAlcoolica = bebidaAlcoolica;
	}

	public List<Produtos> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produtos> produtos) {
		this.produtos = produtos;
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
		Categoria other = (Categoria) obj;
		return Objects.equals(id, other.id);
	}

}
