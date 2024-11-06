import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Mail from "../../assets/EmailIcon.png";
import Chave from "../../assets/Key.png";
import axios from "axios";

import {
  Container,
  Title,
  Subtitle,
  InputContainer,
  Label,
  Input,
  //ErrorMessage,
  AreaTitle,
  AreaSubtitle,
  TotalTitleArea,
  CadastroLink,
  AreaForm,
  Button,
  MailIcone,
  ChaveIcone,
  Form,
} from "./Login.style";

import { useNavigate } from "react-router-dom";
export default function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/usuario/${email}`
      );
      console.log("Resposta da API:", response.data);

      if (response.data.senha === senha && response.data.nome === "Admin") {
        navigate("/editor");
      } else if (response.data.senha === senha) {
        navigate("/");
      } else {
        alert("Senha incorreta, digite de novo!!");
      }
    } catch (error) {
      error("Erro ao buscar o e-mail:", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <TotalTitleArea>
          <AreaTitle>
            <Title>Login</Title>
          </AreaTitle>
          <AreaSubtitle>
            <Subtitle>
              Faça o seu cadastro conosco no link de{" "}
              <CadastroLink to="/cadastro">Cadastro</CadastroLink>
            </Subtitle>
          </AreaSubtitle>
        </TotalTitleArea>

        <AreaForm>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="email">E-mail:</Label>
              <MailIcone src={Mail} alt="ícone de email" />
              <Input
                type="email"
                id="email"
                placeholder="Digite seu E-mail"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)} // Atualiza o estado do e-mail
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="senha">Senha:</Label>
              <ChaveIcone src={Chave} alt="ícone de senha" />
              <Input
                type={senhaVisivel ? "text" : "password"}
                id="senha"
                placeholder="Digite sua Senha"
                required
                value={senha}
                onChange={(event) => setSenha(event.target.value)} // Atualiza o estado da senha
              />
            </InputContainer>

            <Button type="submit">Login</Button>
          </Form>
        </AreaForm>
      </Container>

      <Footer />
    </>
  );
}
