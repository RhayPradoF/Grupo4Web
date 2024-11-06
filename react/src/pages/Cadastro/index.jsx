import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
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
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BotaoFlutuante from '../../components/BotaoFlutuante';

export default function Cadastro() {

    const [erro, setErro] = useState(null);
    

    let navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const cadastroUsuario = (data) => {
        axios
        .post("http://localhost:8080/usuario", data)
        .then (() => {
            console.log("Deu certo")
            navigate("/");
        })
        .catch(() => {
            console.log('Deu ruim');
            
        })
};



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
                <Form onSubmit={handleSubmit(cadastroUsuario)}>
                    <InputContainer>
                        <Label htmlFor="nome">Nome:</Label>
                        <Input
                            type="text"
                            id="nome"
                            name="nome"
                            {...register("nome")}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email")}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="cpf">CPF:</Label>
                        <Input
                            type="text"
                            id="cpf"
                            name="cpf"
                            {...register("cpf")}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="senha">Senha:</Label>
                        <Input
                            type="password"
                            id="senha"
                            name="senha"
                            {...register("senha")}
                            required
                        />
                    </InputContainer>

                    <InputContainer>
                        <Label htmlFor="confirmasenha">Confirmar Senha:</Label>
                        <Input
                            type="password"
                            id="confirmasenha"
                            name="confirmasenha"
                            {...register("confirmaSenha")}
                            required
                        />
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                    {erro && <ErrorMessage>{erro}</ErrorMessage>}
                </Form>
            </AreaForm>
            <BotaoFlutuante/>
            <Footer />
        </Container>
    );
}
