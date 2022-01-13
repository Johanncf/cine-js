import { useState } from "react"
import { Anchor, CloseMenuIcon, LogoButton, LogoIcon, LogoName, Menu, MenuButton, MenuItem, MenuList, Nav, OpenMenuIcon } from './styled.elements'

// Esta variável irá guardar a propriedade background do header da pagina. Faça as alterações para sua página.
const purpleGradient = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(32,17,91,1) 35%, rgba(32,17,91,1) 65%, rgba(0,0,0,1) 100%, rgba(32,17,91,1) 100%);'

// Esta variável guarda as opções que devem aparecer no menu de navegação com suas respectivas rotas. Adeque às suas necessidades.
const menuItems = [
    {
        item: 'Início',
        path: '/'
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
    const [display, setDisplay] = useState(false)

    const handleDisplay = () => {
        setDisplay(display => !display)
    }

    return (
        <>
            <Menu bg={purpleGradient}>
                <Nav>
                    <LogoButton to='/'>
                        {/* Aqui deve entrar a logo do seu site com sua estilização própria*/}
                        <LogoIcon/>
                        <LogoName to='/'>CINE JS</LogoName>
                    </LogoButton>
                    <MenuButton onClick={handleDisplay}>
                        {
                            display ? <CloseMenuIcon /> : <OpenMenuIcon />
                        }
                    </MenuButton>
                </Nav>
            </Menu>
            <MenuList $display={display} bg={purpleGradient}>
                {
                    menuItems.map((item, index) => {
                        return (
                            <MenuItem key={index} onClick={handleDisplay}><Anchor to={`${item.path}`}>{item.item}</Anchor></MenuItem>
                        )
                    })
                }
            </MenuList>
        </>
    )
}