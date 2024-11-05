package br.org.pizzaria.pizzaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.pizzaria.pizzaria.domain.Produtos;
import br.org.pizzaria.pizzaria.dto.ProdutoInserirDTO;
import br.org.pizzaria.pizzaria.repository.ProdutosRepository;

@Service
public class ProdutosService {

    @Autowired
    private ProdutosRepository produtosRepository;

    public List<Produtos> findAll() {
        return produtosRepository.findAll();
    }

    public Optional<Produtos> findById(Long id) {
        return produtosRepository.findById(id);
    }

    public Produtos save(ProdutoInserirDTO produtoInserirDTO) {
        return produtosRepository.save(produtoInserirDTO);
    }

    public void delete(Long id) {
        produtosRepository.deleteById(id);
    }
}