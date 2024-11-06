package br.org.pizzaria.pizzaria.service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import br.org.pizzaria.pizzaria.domain.Usuario;
import br.org.pizzaria.pizzaria.dto.UsuarioDTO;
import br.org.pizzaria.pizzaria.dto.UsuarioInserirDTO;
import br.org.pizzaria.pizzaria.exception.EmailException;
import br.org.pizzaria.pizzaria.exception.SenhaException;
import br.org.pizzaria.pizzaria.repository.UsuarioRepository;



@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
		
	public List<UsuarioDTO> findAll() {
		List<Usuario> usuarios = usuarioRepository.findAll();
		
		/*
		List<UsuarioDTO> usuariosDTO = new ArrayList<>();
		for(Usuario usuario: usuarios) {
			usuariosDTO.add(new UsuarioDTO(usuario));
		}
		*/
		List<UsuarioDTO> usuariosDTO = usuarios.stream().map(UsuarioDTO::new).toList();
		return usuariosDTO;
	}
	
	public Optional<Usuario> buscar(String email) {
		return usuarioRepository.findByEmail(email);
	}
	
	@Transactional // quando coloca essa anotação tudo no código fica em transação, caso de erro ele vai desfazer tudo
	public UsuarioDTO inserir(UsuarioInserirDTO usuarioInserirDTO) throws EmailException, SenhaException {
		if (!usuarioInserirDTO.getSenha().equals(usuarioInserirDTO.getConfirmaSenha())) {
			throw new SenhaException("Senha e Confirma Senha não são iguais");
		}
		if (usuarioRepository.findByEmail(usuarioInserirDTO.getEmail()).isPresent()) {
		    throw new EmailException("Email já existente");
		}

		
		Usuario usuario = new Usuario();
		usuario.setNome(usuarioInserirDTO.getNome());
		usuario.setEmail(usuarioInserirDTO.getEmail());
		usuario.setCpf(usuarioInserirDTO.getCpf());
		usuario.setSenha(usuarioInserirDTO.getSenha());
		
	
		
		usuario = usuarioRepository.save(usuario); // só salva se no trnsactional tudo ocorrer de forma correta
		
		//throw new SenhaException("Senha e Confirma Senha não são iguais");
		
		
		UsuarioDTO usuarioDTO = new UsuarioDTO(usuario);
		return usuarioDTO;
	}
	

	
	
	
}