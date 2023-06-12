import styled  from "styled-components"
import Image from '../../assets/background.svg'
export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #A1A1A1A1;
`
export const Container = styled.div`
    width: 514px;
    height: 800px;
    border-radius: 10px;
    background-image: url(${Image});
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    form{
        display: flex;
    flex-direction: column;
    justify-content: center;
    };
    a{
    background: #82a9e5;
    border-radius: 6px;
    width: 342px;
    height: 64px;
    border: none;  
    text-align: center;
    padding-top: 30px;
    text-decoration: none;
    margin-top: 10px;
    font-weight: 900;
    font-size: 14px;
    line-height: 2px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .5;
    }
}
`
export const Img = styled.img`
    width: 300px;
    margin-bottom: 50px;
`
export const H1 = styled.h1`
    color: #0E3B75;
    margin-bottom: 50px;
`
export const Label = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 13px;
    color: #0E3B75;
    margin-top: 10px;
    margin-bottom: 5px;
`
export const Input = styled.input`
    width: 342px;
    height: 54px;
    font-weight: 500;
    font-size: 18px;
    line-height: 13px;
    background: #E8E8E8;
    border-radius: 10px;
    border: none;
    color: #0E3B48;

    padding: 9px;
`
export const Button = styled.button`
    background: #3AB091;
    border-radius: 6px;
    width: 342px;
    height: 64px;
    border: none;  
    margin-top: 40px;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .5;
    }
`
export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #cc0000;
    margin-top: 2px;
`