import { styled } from "styled-components";

export const Banner = styled.section`
  margin-top: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const ImgBanner = styled.img`
  border-radius: 0 10px 10px 0;
  height: 500px;
`;

export const DivBannerTexto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextoBanner = styled.h1`
  color: #fff;
  font-family: "Playfair";
  font-size: 64px;
  margin-bottom: 20px;
`;

export const SloganBanner = styled.p`
  color: #fff;
  font-family: "Raleway";
  font-size: 32px;
`;

export const TextoAmarelo = styled.span`
  color: #ffa600;
`;
export const TextoVerde = styled.span`
  color: #03aa22;
  font-weight: 600;
`;

export const AreaCardapio = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
`;

export const DivTituloCardapio = styled.div`
  text-align: center;
  width: 500px;
  margin: 50px 0;
`;

export const TituloCardapio = styled.h2`
  color: #fff;
  font-family: "Playfair";
  font-size: 64px;
  border-bottom: 1px solid #fff;
`;

export const Categoria = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const TituloCategoria = styled.h2`
  color: #fff;
  font-family: "Playfair";
  font-size: 40px;
  margin-bottom: 50px;

`;

export const Produto = styled.div`
  border-bottom: 1px solid #fff;
  margin: 0 100px 50px 100px;
  display: flex;
  justify-content: space-between;
`
export const DivNomeProduto = styled.div`
  width: 70%;
  padding-bottom: 10px;
`

export const NomeProduto = styled.p`
  color: #fff;
  font-family: "Raleway";
  font-size: 25px;
  
`

export const TituloProduto = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: #ffa600;
`

export const DivPrecoProduto = styled.div`
  padding-bottom: 10px;
`

export const ListaPrecoProduto = styled.ul`
  color: #fff;
  list-style: none;
`

export const ItemPrecoProduto = styled.li`
color: #fff;
font-family: Verdana, Tahoma, sans-serif;
font-size: 18px;
`