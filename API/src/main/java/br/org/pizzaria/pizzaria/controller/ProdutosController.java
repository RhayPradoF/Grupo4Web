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
    public Produtos create(@RequestBody Produtos produto) {
        return produtosService.save(produto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produtos> update(@PathVariable Long id, @RequestBody Produtos produto) {
        if (!produtosService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        produto.setId(id);
        return ResponseEntity.ok(produtosService.save(produto));
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