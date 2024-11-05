import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import React from 'react';
import { 
    Container, TotalTitleArea, AreaTitle, Title, Subtitle, AreaSubtitle, 
    AreaForm, Form, Label, Input, Button, InputContainer, ErrorMessage 
} from './Cadastro.style.jsx'; // Importação dos componentes estilizados

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    function cadastrar(event) {
        event.preventDefault();

        const novoUsuario = {
            email: email,
            nome: nome,
            cpf: cpf,
            senha: senha,
            confirmarSenha: confirmarSenha,
        };

        if (email === '' || nome === '' || cpf === '' || senha === '' || confirmarSenha === '') {
            alert('Por favor, preencha todos os campos');
            return;
        } else if (confirmarSenha !== senha) {
            alert('As senhas precisam ser iguais');
            return;
        } else if (senha.length !== 8) {
            alert('A senha deve ter exatamente 8 caracteres');
            return;
        }

        const emailCadastrado = false; // Esta variável deve ser verificada na API
        const cpfCadastrado = false; // Esta variável deve ser verificada na API

        if (emailCadastrado) {
            alert('E-mail já cadastrado');
            return;
        }
        if (cpfCadastrado) {
            alert('CPF já cadastrado');
            return;
        }

        alert('Cadastrado com sucesso!');
    }

    return (
        <Container>
            <Header />
            <TotalTitleArea>
                <AreaTitle>
                    <Title>Cadastro de Clientes</Title>
                </AreaTitle>
                <AreaSubtitle>
                    <Subtitle>Preencha o formulário abaixo</Subtitle>
                </AreaSubtitle>
            </TotalTitleArea>

            <AreaForm>
                <Form onSubmit={cadastrar}>
                    <InputContainer>
                        <Label htmlFor="nome">Nome:</Label>
                        <Input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="cpf">CPF:</Label>
                        <Input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={cpf}
                            onChange={(event) => setCpf(event.target.value)}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="senha">Senha:</Label>
                        <Input
                            type="password"
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="confirmarsenha">Confirmar Senha:</Label>
                        <Input
                            type="password"
                            id="confirmarsenha"
                            name="confirmarsenha"
                            value={confirmarSenha}
                            onChange={(event) => setConfirmarSenha(event.target.value)}
                            required
                        />
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                    {erro && <ErrorMessage>{erro}</ErrorMessage>}
                </Form>
            </AreaForm>

            <Footer />
        </Container>
    );
}
