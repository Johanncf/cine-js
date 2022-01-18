import { Body, Container, Menu, Nav, LogoButton, LogoIcon, LogoName, FormContainer, LoginForm, FormTitle, FormInput, FormButton, ErrorMsg, Redirect, CliqueAqui } from './styled.elements';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const purpleGradient = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(32,17,91,1) 35%, rgba(32,17,91,1) 65%, rgba(0,0,0,1) 100%, rgba(32,17,91,1) 100%);'


export default function Register() {

    const [formData, setFormData] = useState({ empty: true })
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [registrationFailed, setRegistrationFailed] = useState(false)
    const [mismatch, setMismatch] = useState(false)

    const redirect = useNavigate()

    useEffect(() => {

        const fetchAPI = async () => {
            const req = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const res = await req.json()
            if (res.values.token === '0xj4h0vi4') {
                localStorage.setItem(`${res.key}`, JSON.stringify(res.values))
                redirect('/cine')
                // window.location.reload(false)
            } else if (res.values === 'exists') {
                setRegistrationFailed(true)
            }
        }

        if (formData.empty !== true) {
            console.log(formData.password, formData.confirmPassword)
            fetchAPI()
            return
        }
        return
    }, [formData, confirmPassword, password, mismatch, redirect])

    useEffect(() => {
        (confirmPassword !== password) && confirmPassword.length > 0 ? setMismatch(true) : setMismatch(false)
    }, [confirmPassword, mismatch, password])

    function handleUserInfos(event) {
        event.preventDefault()

        let login = event.target.childNodes[1].value
        let password = event.target.childNodes[2].value
        let confirmPassword = event.target.childNodes[3].value

        if (login === '' || password === '' || confirmPassword === '') return
 
        if (password !== confirmPassword) return

        const newData = {
            login: login,
            password: password,
            confirmPassword: confirmPassword
        }
        setFormData(newData)

        setLogin('')
        setPassword('')
        setConfirmPassword('')
    }


    return (
        < Body >
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
                        <FormInput type='email' name='login' placeholder='E-mail'  onChange={(e) => setLogin(e.target.value)} value={login}/>
                        <FormInput type='password' name='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <FormInput type='password' name='password-confirmation' placeholder='Confirme a senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        <FormButton type='submit' value='Cadastrar' />
                        {
                            registrationFailed && <ErrorMsg>Já existe um usuário com este login! Tente com outro e-mail.</ErrorMsg>
                        }
                        {
                            mismatch && <ErrorMsg>As senhas não correspondem!</ErrorMsg>
                        }
                        <Redirect>Já possui cadastro? Clique <CliqueAqui to='/login'>aqui</CliqueAqui> para fazer login.</Redirect>
                    </LoginForm>
                </FormContainer>
            </Container>
        </Body >
    )
}