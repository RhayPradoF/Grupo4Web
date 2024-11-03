import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const Cabecalho = styled.header`
    background-color: #3e3e3e;
    height: 110px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
`

export const Logo = styled.img`
    width: 96.75px;
    margin-left: 50px;
`

export const Menu = styled.ul`
    list-style: none;
    font-size: 36px;
    
`
export const ItemMenu = styled.li`
    display: inline-block;
    margin-right: 30px;
`

export const ItemLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Playfair';

    &:hover{
        color: #FFA600;
    }
`