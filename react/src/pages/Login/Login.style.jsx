import { styled } from "styled-components";
import { Link } from 'react-router-dom';



export const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const TotalTitleArea = styled.div`

    margin: 0 60px;
`;

export const AreaTitle = styled.div`
    text-align: center;
  
`;

export const Title = styled.h1`
    font-size: 80px;
    margin: 20px 0;
    color: #fff;
    font-family: 'Playfair';
    
`;

export const Subtitle = styled.h2`
    margin: 10px 0;
    color: #fff;
    font-family: "Raleway";
    font-size: 35px;
`;

export const AreaSubtitle = styled.div`
    text-align: center;
`;

export const CadastroLink = styled(Link)`
    color: rgba(255, 217, 0, 1);
    font-family: 'Raleway';
`;

export const AreaForm = styled.div`
    margin: 50px 300px 100px 300px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Form = styled.form`
   display: flex;
   flex-direction: column ;
   justify-content: center;
    width: 100%; 

`;


export const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
    color:#fff;
`;

export const MailIcone = styled.img`
    color: 005E11;
    justify-self: start;
    position: absolute;
    left: 10px; 
    top: 50%;
    width: 20px; 
    pointer-events: none;
    
`;

export const ChaveIcone = styled.img`
     color: 005E11;
    position: absolute;
    left: 10px; 
    top: 56%;
    width: 20px; 
    pointer-events: none;
`;

export const Input = styled.input`

    height: 40px;
    padding-left: 40px;
    padding: 10px 10px 10px 40px; 
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box; 
    background-color: rgba(255, 255, 255, 0.60); 
    font-size: 20px;

    `;

export const InputContainer = styled.div`
position: relative;
margin-bottom: 15px;
width: 100%;
`;


export const Button = styled.button`
    background-color: #FFA600;
    color: #fff;
    border-radius: 50px;
    padding: 10px 80px;
    border: none;
    cursor: pointer;
    font-size: 20px;

`;


export const ErrorMessage = styled.p`
    color: red;
    margin-top: 10px;
`;
