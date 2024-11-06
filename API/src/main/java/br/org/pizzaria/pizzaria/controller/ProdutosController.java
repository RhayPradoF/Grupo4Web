package br.org.pizzaria.pizzaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.pizzaria.pizzaria.domain.Categoria;
import br.org.pizzaria.pizzaria.domain.Produtos;
import br.org.pizzaria.pizzaria.dto.ProdutoDTO;
import br.org.pizzaria.pizzaria.dto.ProdutoInserirDTO;
import br.org.pizzaria.pizzaria.repository.CategoriaRepository;
import br.org.pizzaria.pizzaria.repository.ProdutosRepository;
import br.org.pizzaria.pizzaria.service.ProdutosService;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*")
public class ProdutosController {
	
	@Autowired
	private ProdutosRepository produtosRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;


    @Autowired
    private ProdutosService produtosService;

    @GetMapping
    public List<ProdutoDTO> getAll() {
        List <ProdutoDTO> produtoDTO = produtosService.findAll();
        return produtoDTO;
    }

    @GetMapping("/{id}")
	public ResponseEntity<Produtos> buscar(@PathVariable Long id) {
		Optional<Produtos> produtosOpt = produtosRepository.findById(id);
		if (produtosOpt.isPresent()) {
			return ResponseEntity.ok(produtosOpt.get());
		}
		return ResponseEntity.notFound().build();
	}

    @PostMapping
    public ResponseEntity<Produtos>  create(@RequestBody ProdutoInserirDTO produtoInserirDTO) {
    	Produtos produto = produtosService.save(produtoInserirDTO);
        return ResponseEntity.ok(produto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoInserirDTO> alterar(@PathVariable Long id, @RequestBody ProdutoInserirDTO produtoInserirDTO) {
        if (!produtosRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Produtos produtos = produtosRepository.findById(id).orElseThrow();

        Optional<Categoria> categoriaOPT = categoriaRepository.findById(produtoInserirDTO.getIdCategoria());
        if (categoriaOPT.isPresent()) {
            produtos.setCategoria(categoriaOPT.get());
        }
        produtos.setDescricao(produtoInserirDTO.getDescricao());
        produtos.setPrecoG(produtoInserirDTO.getPrecoG());
        produtos.setPrecoM(produtoInserirDTO.getPrecoM());
        produtos.setPrecoP(produtoInserirDTO.getPrecoP());
        produtos.setSabor(produtoInserirDTO.getSabor());

        produtosRepository.save(produtos);
        return ResponseEntity.ok(produtoInserirDTO);
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!produtosService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        produtosService.delete(id);
        return ResponseEntity.noContent().build();
    }
}