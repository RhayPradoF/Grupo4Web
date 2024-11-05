package br.org.pizzaria.pizzaria.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.org.pizzaria.pizzaria.domain.Usuario;
import br.org.pizzaria.pizzaria.dto.UsuarioDTO;
import br.org.pizzaria.pizzaria.dto.UsuarioInserirDTO;
import br.org.pizzaria.pizzaria.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> listar() {
			return ResponseEntity.ok(usuarioService.findAll());
	}
	
	@GetMapping("/{email}")
	public ResponseEntity<UsuarioDTO> buscar(@PathVariable String email) {
		Optional<Usuario> usuarioOpt = usuarioService.buscar(email);
		if (usuarioOpt.isPresent()) {
			UsuarioDTO usuarioDTO = new UsuarioDTO(usuarioOpt.get());
			return ResponseEntity.ok(usuarioDTO);
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public ResponseEntity<UsuarioDTO> inserir(@RequestBody UsuarioInserirDTO usuarioInserirDTO) {
		UsuarioDTO  usuarioDTO= usuarioService.inserir(usuarioInserirDTO);
		URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(usuarioDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(usuarioDTO);
	}
	
}