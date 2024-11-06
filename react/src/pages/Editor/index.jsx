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
} from "../../pages/Editor/Editor.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import lixo from "../../assets/trash.png";
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

//Os id presente ao longo do codigo são dos blocos
export default function Editor() {
  const [cards, setCards] = useState([]);
  const [idCat, setCat] = useState(0);


  const [newProduct, setNewProduct] = useState({
    sabor: "",
    descricao: "",
    precoP: 0,
    precoM: 0,
    precoG: 0,
    idCategoria: 1, // Default "Salgado"
  });

  // Pegar os dados existentes da API, funcionando
  useEffect(() => {

    axios
      .get("http://localhost:8080/produtos")
      .then((response) => {
        setCards(response.data); // Preencher os cards com os dados da API, funcionando
      })
      .catch(() => console.log("Problemas ao carregar os dados"));
  }, []);

  // Função para adicionar um novo card na API, funcionando
  const addCard = () => {
    const newCardData = {
      sabor: newProduct.sabor,
      descricao: newProduct.descricao,
      precoP: newProduct.precoP,
      precoM: newProduct.precoM,
      precoG: newProduct.precoG,
      idCategoria: newProduct.idCategoria,
    };

    // Adicionar novo produto na API, funcionando
    axios
      .post("http://localhost:8080/produtos", newCardData)
      .then((response) => {
        console.log("Produto adicionado com sucesso");
        setCards([...cards, response.data]); // Atualiza o estado com o novo card retornado pela API
        setNewProduct({
          sabor: "",
          descricao: "",
          precoP: 0,
          precoM: 0,
          precoG: 0,
          idCategoria: 1, // Reset ao valor padrão de categoria
        });
      })
      .catch(() => console.log("Erro ao adicionar produto"));
  };

  // Função para lidar com mudanças nos inputs do formulário, essa função peguei por fora, não entendi mto bem oq faz
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  // Função apagar, funcionando
  function apagar(id) {
    axios
      .put(`http://localhost:8080/produtos/${card.id}`, atProduct)
      .then(() => {
        console.log("Sucesso ao atualizar");
      })
      .catch(() => console.log("Problemas na hora de apagar"));
  }
  
  let tempProduct = {
      sabor: null,
      descricao: null,
      precoP: null,
      precoM: null,
      precoG: null,
  }


  function atualizar(card) {

    console.log(tempProduct.sabor);
    
    
    let atProduct = {
      sabor: card.sabor,
      descricao: card.descricao,
      precoP: card.precoP,
      precoM: card.precoM,
      precoG: card.precoG,
      idCategoria: card.idCategoria,
    };

    if (tempProduct.sabor != null ) {
      atProduct.sabor = tempProduct.sabor
    }
    if(tempProduct.descricao != null ){
      atProduct.descricao = tempProduct.descricao
    }
    if(tempProduct.precoP != null ){
      atProduct.precoP = tempProduct.precoP
    }
    if(tempProduct.precoM != null ){
      atProduct.precoM = tempProduct.precoM
    }
    if(tempProduct.precoG != null ){
      atProduct.precoG = tempProduct.precoG

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

    console.log(atProduct.sabor);

    axios.put(`http://localhost:8080/produtos/${card.id}`, atProduct)
    .then(() => { console.log('fooi');
    })
    .catch(()=>{console.log('nao foi');
    })
  }

  //Codigo ta confuso mas funcional eu acho
  return (

    <>
      <Header />
      <Container>
        {cards.map((card) => (
          <Card key={card.id}>
            <Form>
              <Area>
                <AreaTexto>
                  <Label>Sabor: </Label>
                  <InputText
                    defaultValue={card.sabor}
                    onChange={(e) => {
                      tempProduct.sabor = e.target.value;
                    }}
                  />
                  <Label>Descrição: </Label>
                  <InputText
                    defaultValue={card.descricao}
                    onChange={(e) => (tempProduct.descricao = e.target.value)}
                  />
                  <Label>Categoria: </Label>
                  <InputText
                    type="number"
                    value={card.idCategoria}
                    onChange={() => value = value}
                  />
                  <InputText defaultValue={card.idCategoria} value={card.idCategoria}/>

                  {/* Esses botoes tao inuteis, nem sei se vai dar tempo de dar uma função pra eles, no formulario de envio so consigo
                  colocar os valores que ja foram definidos para o campo, se não da erro, por exemplo, se eu escrever "batata" no 
                  categoria da ruim */}
                
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

                    {/* Nao tava conseguindo fazer um update nessa paginda, então pensei em criar outra q so puxa o Card selecionado por ID e altera por la */}

                    <BotaoAtualizar
                      onClick={(e) => {
                        e.preventDefault();
                        atualizar(card);
                      }}
                    >
                      Atualizar
                    </BotaoAtualizar>
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
                  <InputNum type="number" defaultValue={parseFloat(card.precoG).toFixed(2)} onBlur={(e) => (tempProduct.precoG = parseFloat(e.target.value).toFixed(2))}/>

                  <BtnLixo onClick={() => apagar(card.id)}>
                    <Lixo src={lixo} alt="Apagar" />
                  </BtnLixo>
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

        {/* Daq pra baixo é o formulario para adicionar produto, so precida de um formatação pra ficar bonito */}
        {/* Daq pra baixo é o formulario para adicionar produto, so precida de um formatação pra ficar bonito */}

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
                <InputText name="sabor" value={newProduct.sabor} onChange={handleInputChange} />
                <Label>Descrição: </Label>
                <InputText name="descricao" value={newProduct.descricao} onChange={handleInputChange} />
                <Label>Categoria: </Label>
                <InputText name="idCategoria" value={newProduct.idCategoria} onChange={handleInputChange} />
          
              <AreaNum>
                <Label>ValorP: </Label>
                <InputNum name="precoP" value={newProduct.precoP} onChange={handleInputChange} />
                <Label>ValorM: </Label>
                <InputNum name="precoM" value={newProduct.precoM} onChange={handleInputChange} />
                <Label>ValorG: </Label>
                <InputNum name="precoG" value={newProduct.precoG} onChange={handleInputChange} />
              </AreaNum>
      
      <Footer />
    </>
  );
}