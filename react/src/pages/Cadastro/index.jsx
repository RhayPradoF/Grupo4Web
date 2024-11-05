import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import React from 'react';
import { 
    Container, 
    TotalTitleArea, 
    AreaTitle, 
    Title, 
    Subtitle, 
    AreaSubtitle, 
    AreaForm, 
    Form, 
    Label, 
    Input, 
    Button, 
    InputContainer, 
    ErrorMessage 
} from './Cadastro.style.jsx';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    const verificarUsuarioExistente = async (email, cpf) => {
        try {
            const resposta = await fetch("https://6722c0d12108960b9cc57abf.mockapi.io/clientes");
            const usuarios = await resposta.json();

            const emailCadastrado = usuarios.some(usuario => usuario.email === email);
            const cpfCadastrado = usuarios.some(usuario => usuario.cpf === cpf);

            return { emailCadastrado, cpfCadastrado };
        } catch (error) {
            console.error("Erro ao verificar usuários:", error);
            return { emailCadastrado: false, cpfCadastrado: false };
        }
    };

    async function cadastrar(event) {
        event.preventDefault();

        if (email === '' || nome === '' || cpf === '' || senha === '' || confirmarSenha === '') {
            setErro('Por favor, preencha todos os campos');
            return;
        } else if (confirmarSenha !== senha) {
            setErro('As senhas precisam ser iguais');
            return;
        } else if (senha.length !== 8) {
            setErro('A senha deve ter exatamente 8 caracteres');
            return;
        }

        const { emailCadastrado, cpfCadastrado } = await verificarUsuarioExistente(email, cpf);

        if (emailCadastrado) {
            setErro('E-mail já cadastrado');
            return;
        }
        if (cpfCadastrado) {
            setErro('CPF já cadastrado');
            return;
        }

        const novoUsuario = {
            email: email,
            nome: nome,
            cpf: cpf,
            senha: senha,
        };

       
        try {
            const resposta = await fetch("https://6722c0d12108960b9cc57abf.mockapi.io/clientes", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoUsuario),
            });

            
            if (!resposta.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

     
            console.log('Usuário cadastrado com sucesso:', novoUsuario);

            alert('Cadastrado com sucesso!');
          
            setNome('');
            setEmail('');
            setCpf('');
            setSenha('');
            setConfirmarSenha('');
            setErro('');
        } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
            setErro('Erro ao realizar cadastro. Tente novamente.');
        }
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
