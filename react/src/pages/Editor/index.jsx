import React, { useState, useEffect } from "react";
import lixo from "../../assets/trash.png";
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
  Adicionar,
  BtnLixo,
} from "./Editor.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

export default function Editor() {
  const [cards, setCards] = useState([]);
  const [idCat, setCat] = useState();
  const [newProduct, setNewProduct] = useState({
    sabor: "",
    descricao: "",
    precoP: 0,
    precoM: 0,
    precoG: 0,
    idCategoria: 1,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/produtos")
      .then((response) => {
        setCards(response.data);
      })
      .catch(() => console.log("Problemas ao carregar os dados"));
  }, []);

  const addCard = () => {
    const newCardData = {
      sabor: newProduct.sabor,
      descricao: newProduct.descricao,
      precoP: newProduct.precoP,
      precoM: newProduct.precoM,
      precoG: newProduct.precoG,
      idCategoria: newProduct.idCategoria,
    };

    axios
      .post("http://localhost:8080/produtos", newCardData)
      .then((response) => {
        console.log("Produto adicionado com sucesso");
        setCards([...cards, response.data]);
        setNewProduct({
          sabor: "",
          descricao: "",
          precoP: 0,
          precoM: 0,
          precoG: 0,
          idCategoria: 1,
        });
      })
      .catch(() => console.log("Erro ao adicionar produto"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  function apagar(id) {
    axios
      .delete(`http://localhost:8080/produtos/${id}`)
      .then(() => {
        console.log("Apagado com sucesso");
        setCards(cards.filter((card) => card.id != id));
      })
      .catch(() => console.log("Problemas na hora de apagar"));
  }

  let tempProduct = {
    sabor: null,
    descricao: null,
    precoP: null,
    precoM: null,
    precoG: null,
  };

  function atualizar(card) {
    console.log(tempProduct.sabor);
    console.log(tempProduct.precoM);

    let atProduct = {
      sabor: card.sabor,
      descricao: card.descricao,
      precoP: card.precoP,
      precoM: card.precoM,
      precoG: card.precoG,
      idCategoria: card.idCategoria,
    };

    if (tempProduct.sabor != null) {
      atProduct.sabor = tempProduct.sabor;
    }
    if (tempProduct.descricao != null) {
      atProduct.descricao = tempProduct.descricao;
    }
    if (tempProduct.precoP != null) {
      atProduct.precoP = tempProduct.precoP;
    }
    if (tempProduct.precoM != null) {
      atProduct.precoM = tempProduct.precoM;
    }
    if (tempProduct.precoG != null) {
      atProduct.precoG = tempProduct.precoG;
    }

    axios
      .put(`http://localhost:8080/produtos/${card.id}`, atProduct)
      .then(() => {
        console.log("Sucesso ao atualizar");
      })
      .catch(() => {
        console.log("Erro na requisão ao atualizar");
      });
  }

  return (
    <>
      <Header />
      <Container>
        {cards.map((card) => (
          <Card key={card.id}>
            <Form>
              <Area>
                <AreaTexto>
                  <Label>Categoria: </Label>
                  <InputText
                    type="number"
                    value={card.idCategoria}
                    onChange={() => (value = value)}
                  />
                  <Label>Sabor: </Label>
                  <InputText
                    defaultValue={card.sabor}
                    onChange={(e) => {
                      tempProduct.sabor = e.target.value;
                      console.log(tempProduct.sabor);
                    }}
                  />
                  <Label>Descrição: </Label>
                  <InputText
                    defaultValue={card.descricao}
                    onChange={(e) => (tempProduct.descricao = e.target.value)}
                  />

                  <AreaBotao>
                    <Botao
                      onClick={(e) => {
                        e.preventDefault();
                        setCat((card.idCategoria = 1));
                      }}
                    >
                      Salgado
                    </Botao>
                    <Botao
                      onClick={(e) => {
                        e.preventDefault();
                        setCat((card.idCategoria = 2));
                      }}
                    >
                      Doce
                    </Botao>
                    <Botao
                      onClick={(e) => {
                        e.preventDefault();
                        setCat((card.idCategoria = 3));
                      }}
                    >
                      Bebida
                    </Botao>

                    <BotaoAtualizar
                      onClick={(e) => {
                        atualizar(card);
                      }}
                    >
                      Atualizar
                    </BotaoAtualizar>
                  </AreaBotao>
                </AreaTexto>
                <AreaNum>
                  <Label>ValorP: </Label>
                  <InputNum
                    type="number"
                    defaultValue={parseFloat(card.precoP).toFixed(2)}
                    onChange={(e) =>
                      (tempProduct.precoP = parseFloat(e.target.value).toFixed(
                        2
                      ))
                    }
                  />
                  <Label>ValorM: </Label>
                  <InputNum
                    type="number"
                    defaultValue={parseFloat(card.precoM).toFixed(2)}
                    onChange={(e) =>
                      (tempProduct.precoM = parseFloat(e.target.value).toFixed(
                        2
                      ))
                    }
                  />
                  <Label>ValorG: </Label>
                  <InputNum
                    type="number"
                    defaultValue={parseFloat(card.precoG).toFixed(2)}
                    onChange={(e) =>
                      (tempProduct.precoG = parseFloat(e.target.value).toFixed(
                        2
                      ))
                    }
                  />

                  <BtnLixo onClick={() => apagar(card.id)}>
                    <Lixo src={lixo} alt="Apagar" />
                  </BtnLixo>
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
                <InputText
                  name="sabor"
                  value={newProduct.sabor}
                  onChange={handleInputChange}
                />
                <Label>Descrição: </Label>
                <InputText
                  name="descricao"
                  value={newProduct.descricao}
                  onChange={handleInputChange}
                />
                <Label>Categoria: </Label>
                <InputText
                  name="idCategoria"
                  value={newProduct.idCategoria}
                  onChange={handleInputChange}
                />
              </AreaTexto>
              <AreaNum>
                <Label>ValorP: </Label>
                <InputNum
                  type="number"
                  name="precoP"
                  value={newProduct.precoP}
                  onChange={handleInputChange}
                />
                <Label>ValorM: </Label>
                <InputNum
                  type="number"
                  name="precoM"
                  value={newProduct.precoM}
                  onChange={handleInputChange}
                />
                <Label>ValorG: </Label>
                <InputNum
                  type="number"
                  name="precoG"
                  value={newProduct.precoG}
                  onChange={handleInputChange}
                />
              </AreaNum>
            </Area>
          </Form>
        </AreaAdd>
        <Adicionar onClick={addCard}>Adicionar Novo Produto</Adicionar>
      </Container>
      <Footer />
    </>
  );
}
