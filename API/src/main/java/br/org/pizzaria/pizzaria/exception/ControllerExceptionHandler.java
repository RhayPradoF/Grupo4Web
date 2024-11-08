package br.org.pizzaria.pizzaria.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(EmailException.class)
	protected ResponseEntity<Object> handleEmailException(EmailException ex){
		return ResponseEntity.unprocessableEntity().body(ex.getMessage());
	}
	//esse e para chamar a classe de erro do email e tratar o erro (verificação a mais)

	@ExceptionHandler(SenhaException.class)
	protected ResponseEntity<Object> handleSenhaException(SenhaException ex){
		return ResponseEntity.unprocessableEntity().body(ex.getMessage());
	}
	// esse e para chamar a classe de erro da senha e tratar o erro (verificação a mais)
	
}
