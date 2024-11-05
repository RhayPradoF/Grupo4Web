package br.org.pizzaria.pizzaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.pizzaria.pizzaria.domain.Produtos;
import br.org.pizzaria.pizzaria.dto.ProdutoInserirDTO;
import br.org.pizzaria.pizzaria.repository.ProdutosRepository;
import br.org.pizzaria.pizzaria.service.ProdutosService;

@RestController
@RequestMapping("/api/produtos")
public class ProdutosController {
	
	@Autowired
	private ProdutosRepository produtosRepository;

    @Autowired
    private ProdutosService produtosService;

    @GetMapping
    public List<Produtos> getAll() {
        return produtosService.findAll();
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
    public Produtos create(@RequestBody ProdutoInserirDTO produtoInserirDTO) {
        return produtosService.save(produtoInserirDTO);
    }

    @PutMapping("/{id}")
	public ResponseEntity<ProdutoInserirDTO> alterar(@PathVariable Long id, @RequestBody ProdutoInserirDTO produtoInserirDTO) {
		if (!produtosRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		produtosService.save(produtoInserirDTO);
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