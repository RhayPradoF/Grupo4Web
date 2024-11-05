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
import br.org.pizzaria.pizzaria.repository.CategoriaRepository;
import br.org.pizzaria.pizzaria.service.CategoriaService;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

	public CategoriaRepository categoriaRepository;

	@Autowired
	private CategoriaService categoriaService;

	@GetMapping
	public List<Categoria> getAll() {
		return categoriaService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Categoria> buscar(@PathVariable Long id) {
		Optional<Categoria> categoriaOpt = categoriaRepository.findById(id);
		if (categoriaOpt.isPresent()) {
			return ResponseEntity.ok(categoriaOpt.get());
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public Categoria create(@RequestBody Categoria categoria) {
		return categoriaService.save(categoria);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Categoria> update(@PathVariable Long id, @RequestBody Categoria categoria) {
		if (!categoriaService.findById(id).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		categoria.setId(id);
		return ResponseEntity.ok(categoriaService.save(categoria));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		if (!categoriaService.findById(id).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		categoriaService.delete(id);
		return ResponseEntity.noContent().build();
	}
}