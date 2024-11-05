import { styled } from "styled-components";


export const Rodape = styled.footer`
    background-color: #3e3e3e;
    height: 150px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 0px 20px; 
`

export const RedesSociais = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
`

export const LinkRedesSociais = styled.a`
    cursor: pointer;
`

export const Copy = styled.p`
    color: #fff;
    font-size: 32px;
`