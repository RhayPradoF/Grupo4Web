import { styled } from "styled-components";

export const Texto = styled.p`
  color: #fff;
  font-family: "Raleway";
  font-size: 25px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  margin-bottom: 30px;
  &:last-child{border-bottom: none}
`;

export const ImgSobre = styled.img`
  display: block;
  border-radius: 50px;
  height: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
`;
