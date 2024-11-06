package br.org.pizzaria.pizzaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.pizzaria.pizzaria.domain.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
