import { useState } from "react"
import { Anchor, CloseMenuIcon, LogoButton, LogoIcon, LogoName, SearchButton, Menu, MenuButton, MenuItem, MenuList, Nav, OpenMenuIcon, ButtonsContainer, SearchField, SearchInput, BigSearchButton, BigSearchField, BigSearchInput } from './styled.elements'

import { useLocation } from "react-router-dom";

import isAuthenticated from '../../utils/auth';

// Esta variável irá guardar a propriedade background do header da pagina. Faça as alterações para sua página.
const purpleGradient = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(32,17,91,1) 35%, rgba(32,17,91,1) 65%, rgba(0,0,0,1) 100%, rgba(32,17,91,1) 100%);'

// Esta variável guarda as opções que devem aparecer no menu de navegação com suas respectivas rotas. Adeque às suas necessidades.
const menuItems = [
    {
        item: 'Início',
        path: '/cine'
    },
    {
        item: 'Séries',
        path: '/series'
    },
    {
        item: 'Filmes',
        path: '/filmes'
    },
    {
        item: 'Minha Lista',
        path: '/minha-lista'
    }
]

export default function Header() {

    // useState hooks
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState(false)

    // useLocation hooks
    const {pathname} = useLocation()

    const handleDisplay = () => {
        setDisplay(display => !display)
    }

    const handleSearch = () => {
        setSearch(search => !search)
    }

    const logout = () => {
        console.log('cliquei')
        localStorage.removeItem('cine-js-auth')
        window.location.reload()
    }

    return pathname !== ('/login' && '/register') && (
        <>
            <Menu bg={purpleGradient}>
                <Nav>
                    <LogoButton to='/'>
                        {/* Aqui deve entrar a logo do seu site com sua estilização própria*/}
                        <LogoIcon />
                        <LogoName>CINE JS</LogoName>
                    </LogoButton>
                    <ButtonsContainer>
                        {
                            <SearchField $display={search}><SearchButton onClick={handleSearch} /><SearchInput placeholder="Títulos" $display={search} autoFocus/></SearchField>
                        }
                        <MenuButton onClick={handleDisplay}>
                            {
                                display ? <CloseMenuIcon /> : <OpenMenuIcon />
                            }
                        </MenuButton>
                    </ButtonsContainer>
                </Nav>
            </Menu>
            <MenuList $display={display} bg={purpleGradient}>
                <BigSearchField><BigSearchButton/><BigSearchInput placeholder="Títulos"/></BigSearchField>
                {
                    menuItems.map((item, index) => {
                        return (
                            <MenuItem key={index} onClick={handleDisplay}><Anchor to={`${item.path}`}>{item.item}</Anchor></MenuItem>
                        )
                    })
                }
                {isAuthenticated() && <Anchor to='/login' onClick={() => logout()}>Sair</Anchor>}
            </MenuList>
        </>
    )
}