package br.org.pizzaria.pizzaria.exception;

public class SenhaException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public SenhaException(String message) {
		super(message);
	}

}

//essa classe serve para tratar os erros de senha inválida e outros erros de senha 