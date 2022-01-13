import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenu, BiX, BiCaretRightCircle } from "react-icons/bi";

const Menu = styled.header`
    display: flex;
    margin-bottom: 70px;
    padding: 10px;
    width: 100%;
    position: fixed;
    z-index: 999;
    background: ${props => props.bg};
    height: 5vh;
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
    font-size: 1.8rem;
`;

const LogoName = styled(Link)`
    color: rgb(114 50 242);
    display: flex;
    width: max-content;
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
    text-decoration: none;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10%;
    position: ${props => props.$display ? 'fixed' : 'absolute'};
    top: ${props => props.$display ? '5vh' : '-100vh'};
    z-index: 99;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    background: ${props => props.bg};
    transition: top .3s;

    @media screen and (min-width: 960px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        column-gap: 30px;
        width: 100%;
        height: auto;
        padding: 0;
        background: none;
        position: fixed;
        top: 1.4vh;
        right: 10px;
        z-index: 999;
    }

`;

const MenuItem = styled.li`
    font-family: 'Roboto', sans-serif;
`;

const Anchor = styled(Link)`
    text-decoration: none;
    color: rgb(214 218 218);
    font-size: 1.2rem;
    font-weight: 400;
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;

    background: none;
	border: none;
    padding: 0;

    color: rgb(214 218 218);
    font-size: 1.5rem;
    font-weight: 400;
	
    cursor: pointer;

    @media screen and (min-width: 960px) {
        display: none;
    }
`;

const OpenMenuIcon = styled(BiMenu)`
    font-size: 1.8rem;
`;

const CloseMenuIcon = styled(BiX)`
    font-size: 1.8rem;
`;

export {
    Menu,
    LogoButton,
    LogoIcon,
    LogoName,
    Nav,
    MenuList,
    MenuItem,
    MenuButton,
    OpenMenuIcon,
    CloseMenuIcon,
    Anchor
}