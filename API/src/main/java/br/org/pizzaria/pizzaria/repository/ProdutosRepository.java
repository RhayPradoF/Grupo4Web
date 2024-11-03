package br.org.pizzaria.pizzaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.pizzaria.pizzaria.domain.Produtos;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Long>{

}
