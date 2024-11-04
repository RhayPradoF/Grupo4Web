import React from "react";
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

export default function Home() {
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
        <Categoria>
          <TituloCategoria>Pizzas Salgadas</TituloCategoria>
          <Produto>
            <DivNomeProduto>
              <NomeProduto>
                <TituloProduto>Marguerita </TituloProduto>- Molho de tomate,
                mussarela, tomate e manjericão.
              </NomeProduto>
            </DivNomeProduto>
            <DivPrecoProduto>
              <ListaPrecoProduto>
                <ItemPrecoProduto>P - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>M - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>G - R$100,00</ItemPrecoProduto>
              </ListaPrecoProduto>
            </DivPrecoProduto>
          </Produto>
          <Produto>
            <DivNomeProduto>
              <NomeProduto>
                <TituloProduto>Marguerita </TituloProduto>- Molho de tomate,
                mussarela, tomate e manjericão.
              </NomeProduto>
            </DivNomeProduto>
            <DivPrecoProduto>
              <ListaPrecoProduto>
                <ItemPrecoProduto>P - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>M - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>G - R$100,00</ItemPrecoProduto>
              </ListaPrecoProduto>
            </DivPrecoProduto>
          </Produto>
          <Produto>
            <DivNomeProduto>
              <NomeProduto>
                <TituloProduto>Marguerita </TituloProduto>- Molho de tomate,
                mussarela, tomate e manjericão.
              </NomeProduto>
            </DivNomeProduto>
            <DivPrecoProduto>
              <ListaPrecoProduto>
                <ItemPrecoProduto>P - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>M - R$100,00</ItemPrecoProduto>
                <ItemPrecoProduto>G - R$100,00</ItemPrecoProduto>
              </ListaPrecoProduto>
            </DivPrecoProduto>
          </Produto>
        </Categoria>
      </AreaCardapio>
      <Footer />
    </>
  );
}
