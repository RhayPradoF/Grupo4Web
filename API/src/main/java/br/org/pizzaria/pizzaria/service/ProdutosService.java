package br.org.pizzaria.pizzaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.pizzaria.pizzaria.domain.Categoria;
import br.org.pizzaria.pizzaria.domain.Produtos;
import br.org.pizzaria.pizzaria.dto.ProdutoInserirDTO;
import br.org.pizzaria.pizzaria.repository.CategoriaRepository;
import br.org.pizzaria.pizzaria.repository.ProdutosRepository;

@Service
public class ProdutosService {

    @Autowired
    private ProdutosRepository produtosRepository;
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Produtos> findAll() {
        return produtosRepository.findAll();
    }

    public Optional<Produtos> findById(Long id) {
        return produtosRepository.findById(id);
    }

    public Produtos save(ProdutoInserirDTO produtoInserirDTO) {
    	Optional<Categoria> categoriaOpt = categoriaRepository.findById(produtoInserirDTO.getIdCategoria());
    	
    	Produtos produto = new Produtos();
    	
    	
    	produto.setSabor(produtoInserirDTO.getSabor());
    	produto.setDescricao(produtoInserirDTO.getDescricao());
    	produto.setPrecoP(produtoInserirDTO.getPrecoP());
    	produto.setPrecoM(produtoInserirDTO.getPrecoM());
    	produto.setPrecoG(produtoInserirDTO.getPrecoG());
    	produto.setCategoria(categoriaOpt.get());
    	
    	produtosRepository.save(produto);
        return produto;
    }

    public void delete(Long id) {
        produtosRepository.deleteById(id);
    }
}