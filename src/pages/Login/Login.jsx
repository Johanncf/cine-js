import { Body, Container, Menu, Nav, LogoButton, LogoIcon, LogoName, FormContainer, LoginForm, FormTitle, FormInput, FormButton, ErrorMsg, Redirect, CliqueAqui } from './styled.elements'
import { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom"

const purpleGradient = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(32,17,91,1) 35%, rgba(32,17,91,1) 65%, rgba(0,0,0,1) 100%, rgba(32,17,91,1) 100%);'


export default function Login() {

    const [formData, setFormData] = useState({ empty: true })
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)

    const redirect = useNavigate()

    useEffect(() => {
        const fetchAPI = async () => {
            const req = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const res = await req.json()
            console.log(res)
            if (res.values !== 'failed') {
                localStorage.setItem(`${res.key}`, JSON.stringify(res.values))
                redirect('/cine')
                window.location.reload(false)
            } else {
                setLoginFailed(true)
            }
        }

        formData.empty !== true && fetchAPI()
    }, [formData, redirect])

    function handleUserInfos(event) {
        event.preventDefault()

        let login = event.target.childNodes[1].value
        let password = event.target.childNodes[2].value

        if (login === '' || password === '') return

        const newData = {
            login: login,
            password: password
        }
        setFormData(newData)

        setLogin('')
        setPassword('')
    }


    return (
        <Body>
            <Container>
                <Menu bg={purpleGradient}>
                    <Nav>
                        <LogoButton to='/'>
                            <LogoIcon />
                            <LogoName to='/'>CINE JS</LogoName>
                        </LogoButton>
                    </Nav>
                </Menu>
                <FormContainer>
                    <LoginForm onSubmit={handleUserInfos}>
                        <FormTitle>Entrar</FormTitle>
                        <FormInput type='email' name='login' placeholder='E-mail' onChange={(e) => setLogin(e.target.value)} value={login}/>
                        <FormInput type='password' name='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <FormButton type='submit' value='Entrar'/>
                        {
                            loginFailed && <ErrorMsg>Email e/ou senha incorreto(s)</ErrorMsg>
                        }
                        <Redirect>Ainda não possui cadastro? Clique <CliqueAqui to='/register'>aqui</CliqueAqui></Redirect>
                    </LoginForm>
                </FormContainer>
            </Container>
        </Body>
    )
}