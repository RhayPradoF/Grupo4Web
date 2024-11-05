import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Mail from '../../assets/EmailIcon.png';
import Chave from '../../assets/Key.png'; 

import { 
  Container,
  Title, 
  Subtitle,
  InputContainer, 
  Label, 
  Input, 
  ErrorMessage,
  AreaTitle,
  AreaSubtitle,
  TotalTitleArea,
  CadastroLink,
  AreaForm,
  Button,
  MailIcone,
  ChaveIcone,
   Form,
} from './Login.style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erroEntrada, setErroEntrada] = useState('');
  const [usuario, setUsuario] = useState({});


  useEffect(() => {
    fetch("https://6722c0d12108960b9cc57abf.mockapi.io/clientes")
      .then((resposta) => resposta.json())
      .then((json) => setUsuario(json)) 
      .catch((error) => console.error("Problema na requisição", error));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    fetch("https://6722c0d12108960b9cc57abf.mockapi.io/clientes")
        .then((resposta) => {
            if (!resposta.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            return resposta.json();
        })
        .then((usuarios) => {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
            
            if (usuarioEncontrado) {
                alert('Login realizado com sucesso!');
                              
                if (usuarioEncontrado.isAdmin) {
                    window.location.href = '/admin'; // só se o usuário for admin, redirecionar para a tela de admin
                } else {
                      window.location.href = '/';
                }
            } else {
                setErroEntrada('E-mail ou senha inválidos.');
            }
        })
        .catch((error) => {
            console.error('Erro ao realizar login:', error);
            setErroEntrada('Erro ao realizar login. Tente novamente.');
        });
};

  return (
      <>
      <Header />
      <Container >

        <TotalTitleArea>
       <AreaTitle> 
      <Title>Login</Title>
      </AreaTitle>
        <AreaSubtitle>
      <Subtitle>Faça o seu cadastro conosco no link de <CadastroLink to="/cadastro" >
      Cadastro</CadastroLink>
      </Subtitle>
      </AreaSubtitle>
      </TotalTitleArea>


      <AreaForm>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Label htmlFor="email">E-mail:</Label>
          <MailIcone src={Mail} alt="ícone de email" />
          <Input
            type='email'
            id="email"
            placeholder='Digite seu E-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="senha">Senha:</Label>
          <ChaveIcone src={Chave} alt="ícone de senha" />
          <Input
            type={senhaVisivel ? 'text' : 'password'}
            id="senha"
            placeholder='Digite sua Senha'
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          </InputContainer>

        {erroEntrada && <ErrorMessage>{erroEntrada}</ErrorMessage>}


        <Button type="submit" >Login</Button>
        </Form>
      </AreaForm>
      </Container>

      <Footer />
    
    </>
  );
}
