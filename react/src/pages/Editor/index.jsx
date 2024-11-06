import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  InputNum,
  InputText,
  Form,
  Card,
  Label,
  AreaTexto,
  AreaNum,
  Area,
  Botao,
  AreaBotao,
  BotaoAtualizar,
  Lixo,
  Add,
  AreaAdd,
} from "../../pages/Editor/Editor.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import lixo from "../../assets/trash.png";


export default function Editor() {
  const [cards, setCards] = useState([]);
  const [newProduct, setNewProduct] = useState({
    sabor: "",
    descricao: "",
    precoP: 0,
    precoM: 0,
    precoG: 0,
    idCategoria: 1, // Default "Salgado"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/produtos");
        if (response.data) {
          setCards(response.data);
        } else {
          console.log("Nenhum produto encontrado");
        }
      } catch (error) {
        console.log("Erro ao carregar os dados", error);
      }
    };
    fetchData();
  }, []);

  const addCard = async () => {
    if (newProduct.sabor && newProduct.descricao && newProduct.precoP && newProduct.precoM && newProduct.precoG) {
      try {
        const response = await axios.post("http://localhost:8080/produtos", newProduct);
        if (response.data) {
          setCards([...cards, response.data]);
          resetNewProduct();
        } else {
          console.log("Erro ao adicionar produto");
        }
      } catch (error) {
        console.log("Erro ao adicionar produto", error);
      }
    } else {
      console.log("Preencha todos os campos");
    }
  };

  const resetNewProduct = () => {
    setNewProduct({
      sabor: "",
      descricao: "",
      precoP: 0,
      precoM: 0,
      precoG: 0,
      idCategoria: 1,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const apagar = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/produtos/${id}`);
      setCards(cards.filter((card) => card.id !== id));
      console.log("Apagado com sucesso");
    } catch (error) {
      console.log("Erro ao apagar produto", error);
    }
  };

  return (
    <div >
      <Header />
      <h1>Editor</h1>
      <Container>
        {cards.map((card) => (
          <Card key={card.id}>
            <Form>
              <Area>
                <AreaTexto>
                  <Label>Sabor: </Label>
                  <InputText defaultValue={card.sabor} />
                  <Label>Descrição: </Label>
                  <InputText defaultValue={card.descricao} />
                  <Label>Categoria: </Label>
                  <InputText defaultValue={card.idCategoria} />
                  <AreaBotao>
                    <Link to={`/update/${card.id}`}>
                      <BotaoAtualizar>Atualizar</BotaoAtualizar>
                    </Link>
                    <Lixo src={lixo} alt="Apagar" onClick={() => apagar(card.id)} />
                  </AreaBotao>
                </AreaTexto>
                <AreaNum>
                  <Label>ValorP: </Label>
                  <InputNum defaultValue={card.precoP} />
                  <Label>ValorM: </Label>
                  <InputNum defaultValue={card.precoM} />
                  <Label>ValorG: </Label>
                  <InputNum defaultValue={card.precoG} />
                </AreaNum>
              </Area>
            </Form>
          </Card>
        ))}

        <AreaAdd>
          <Add>Adicionar novo produto</Add>
          <Form>
            <Area>
              <AreaTexto>
                <Label>Sabor: </Label>
                <InputText name="sabor" value={newProduct.sabor} onChange={handleInputChange} />
                <Label>Descrição: </Label>
                <InputText name="descricao" value={newProduct.descricao} onChange={handleInputChange} />
                <Label>Categoria: </Label>
                <InputText name="idCategoria" value={newProduct.idCategoria} onChange={handleInputChange} />
              </AreaTexto>
              <AreaNum>
                <Label>ValorP: </Label>
                <InputNum name="precoP" value={newProduct.precoP} onChange={handleInputChange} />
                <Label>ValorM: </Label>
                <InputNum name="precoM" value={newProduct.precoM} onChange={handleInputChange} />
                <Label>ValorG: </Label>
                <InputNum name="precoG" value={newProduct.precoG} onChange={handleInputChange} />
              </AreaNum>
            </Area>
          </Form>
          <Botao onClick={addCard}>Novo</Botao>
        </AreaAdd>
      </Container>

      <Footer />
    </div>
  );
}
