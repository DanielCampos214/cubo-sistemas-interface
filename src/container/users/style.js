import { styled } from "styled-components";
import backgroundImg from '../../assets/fundo.jpg'
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`  
    width: 300px;
    margin-bottom: 70px;
`
export const Button = styled.button`
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    color: white;
    background-color: #A1A1A1;
    cursor: pointer;

    &:hover{
        opacity: .8;
    };
    &:active{
        opacity: .5;
    }
`;
export const ButtonIcon = styled.button`
    width: 40px;
    height: 40px;
    background-color: #37e80dc7;
    border: none;
    font-weight: 500;
    color: white;
    font-size: 34px;
    border-radius: 40px;
    margin-right: 38px;
        cursor: pointer;

    &:hover{
        opacity: .8;
    };
    &:active{
        opacity: .5;
    }
`