import styled from "styled-components";
import background from '../../assets/netflix.jpg'
import { Link } from 'react-router-dom';
import { BiCaretRightCircle } from "react-icons/bi";


const Body = styled.div`
    height: 100vh;
    
    background: url(${background}) no-repeat;
    background-size: cover;
`;

const Container = styled.div`
    height: 100%;

    background-color: rgba(0, 0, 0, .74);
`;

const Menu = styled.header`
    display: flex;
    padding: 10px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: ${props => props.bg};
    height: 8vh;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    width: 100%;

    z-index: 999;
`;

const LogoButton = styled.button`
    display: flex;
    align-items: center;
    
    color: rgb(214 218 218);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    
    background: none;
	border: none;
    padding: 0;
	
    cursor: pointer;
`;

const LogoIcon = styled(BiCaretRightCircle)`
    font-size: 2.8rem;
`;

const LogoName = styled(Link)`
    color: rgb(114 50 242);
    display: flex;
    width: max-content;
    font-family: 'Bangers', cursive;
    font-size: 2.2rem;
    text-decoration: none;
`;

const FormContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 15%;
    height: 40vh;

    @media screen and (min-width: 650px) {
        left: 25%;
    }

    @media screen and (min-width: 960px) {
        left: 30%;
    }
`;

const LoginForm = styled.form`
    width: 70vw;
    margin: 0 auto;
    padding: 15% 0;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    background-color: rgb(18, 0, 44, .6);

    @media screen and (min-width: 650px) {
        width: 50vw;
    }

    @media screen and (min-width: 960px) {
        width: 40vw;
    }
`;

const FormTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;

    align-self: flex-start;
    margin: 0 0 15% 19%;
`;

const FormInput = styled.input`
    background-color: rgb(214 218 218);
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 65%;
    padding: 3px 5px;
    outline-color: rgb(114 50 242);
`;

const FormButton = styled.input`
    background-color: rgb(114 50 242);
    border: none;
    border-radius: 3px;
    height: 30px;
    width: 65%;

    color: rgb(214 218 218);
    font-weight: 600;

    cursor: pointer;
`

const ErrorMsg = styled.span`
    color: red;
`;

const Redirect = styled.span`
    margin-top: 10%;
`;

const CliqueAqui = styled(Link)`
    color: rgb(114 50 242);
    font-weight: 800;
`;

export {
    Body,
    Container,
    Menu,
    Nav,
    LogoButton,
    LogoIcon,
    LogoName,
    FormContainer,
    LoginForm,
    FormTitle,
    FormInput,
    FormButton,
    ErrorMsg,
    Redirect,
    CliqueAqui
}