import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {
  Banner,
  ImgBanner,
  TextoBanner,
  DivBannerTexto,
  SloganBanner,
  TextoAmarelo,
  TextoVerde,
  TituloCardapio,
  DivTituloCardapio,
  AreaCardapio,
  Categoria,
  TituloCategoria,
  Produto,
  DivNomeProduto,
  NomeProduto,
  TituloProduto,
  DivPrecoProduto,
  ListaPrecoProduto,
  ItemPrecoProduto,
} from "./Home.style";
import bannerImage from "../../assets/pizzaBanner.png";
import axios from "axios";
import BotaoFlutuante from "../../components/BotaoFlutuante";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categorias")
      .then((response) => {
        console.log("Get feito com sucesso");
        setCategorias(response.data);
      })
      .catch(() => console.log("Falha no get"));
  }, []);

  return (
    <>
      <Header />
      <Banner>
        <DivBannerTexto>
          <TextoBanner>
            Cantina da <TextoAmarelo>Pizza</TextoAmarelo>
          </TextoBanner>
          <SloganBanner>
            Onde cada <TextoVerde>fatia</TextoVerde> conta uma história{" "}
            <TextoVerde>italiana</TextoVerde>.
          </SloganBanner>
        </DivBannerTexto>
        <ImgBanner src={bannerImage} />
      </Banner>
      <AreaCardapio>
        <DivTituloCardapio>
          <TituloCardapio>Cardápio</TituloCardapio>
        </DivTituloCardapio>

        {categorias.map((categoria, key) => (
          <Categoria key = {key}>
            <TituloCategoria>{categoria.nome}</TituloCategoria>
            {categoria.produtos.map((produto, chave)=>(
            <Produto key={chave}>
              <DivNomeProduto>
                <NomeProduto>
                  <TituloProduto>{produto.sabor} - </TituloProduto> {produto.descricao}
                </NomeProduto>
              </DivNomeProduto>
              <DivPrecoProduto>
                <ListaPrecoProduto>
                  <ItemPrecoProduto>P - R${parseFloat(produto.precoP).toFixed(2)}</ItemPrecoProduto>
                  <ItemPrecoProduto>M - R${parseFloat(produto.precoM).toFixed(2)}</ItemPrecoProduto>
                  <ItemPrecoProduto>G - R${parseFloat(produto.precoG).toFixed(2)}</ItemPrecoProduto>
                </ListaPrecoProduto>
              </DivPrecoProduto>
            </Produto>
            ))}
          </Categoria>
        ))}
      </AreaCardapio>
      <BotaoFlutuante/>
      <Footer />
    </>
  );
}
