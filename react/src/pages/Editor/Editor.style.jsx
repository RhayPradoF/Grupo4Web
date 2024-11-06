import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 30px 0;
`;

export const Card = styled.div`
  width: 80%;
  padding: 20px 10px;
  background-color: #f9f9f9;
  border-radius: 30px;
  margin-top: 20px;
`;

export const Area = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: "Raleway";
`;

export const AreaTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const AreaNum = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
`;

export const Form = styled.form``;

export const InputText = styled.input`
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 18px;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`;

export const InputNum = styled.input`
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 18px;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`;

export const Botao = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 25px;
  background-color: #3e3e3e;
  font-size: 20px;
  color: white;
  font-family: "Raleway";
  cursor: pointer;
`;

export const AreaBotao = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
  font-weight: 800;
`;

export const BotaoAtualizar = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 25px;
  background-color: #fa0303;
  font-size: 20px;
  color: white;
  font-family: "Raleway";
  font-weight: 800;
  cursor: pointer;
`;

export const Lixo = styled.img`
  width: 60px;
  margin-top: 20px;
`;

export const Add = styled.a`
  font-size: 25px;
  font-family: "Raleway";
  color: #fff;
  text-decoration: none;
  margin-top: 50px;
`;

export const AreaAdd = styled.div`
  margin-top: 50px;
  display: none;
`;

export const Adicionar = styled.button`
  font-size: 20px;
  color: #fff;
  background: none;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`
export const BtnLixo = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`