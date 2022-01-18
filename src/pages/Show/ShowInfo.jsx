import api from '../../dependencies/api'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"

import isAuthenticated from '../../utils/auth'

import { MainContainer } from '../main.styled.elements'

import getStorage from '../../utils/getStorage'
import { Container, Image, ShowDetails, ShowImg, Title, AddShowButton, Sinopsis } from './styled.elements'

const getMyID = () => {
    const values = getStorage()

    if (values) return values.id

    return ''
}



export default function ShowInfo() {

    const params = useParams()

    const redirect = useNavigate()

    const [shows, setShows] = useState('')
    const [newShow, setNewShow] = useState({
        user_id: '',
        show_id: ''
    })
    const [addShowFailed, setAddShowFailed] = useState(false)

    useEffect(() => {
        const apiCall = async () => {
            const res = await api.getHomeList()
            const obj = res
                .map(shows => {
                    return (
                        shows.items.results
                            .find(result => (result.id).toString() === params.show_id)
                    )
                })
                .filter(e => e)
                console.log(obj[0])
            setShows(obj[0])
        }

        isAuthenticated() ? (
            apiCall()
        ) : redirect('/login')
    }, [params.show_id, redirect])

    useEffect(() => {
        const fetchAPI = async () => {
            const req = await fetch('/add_to_list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newShow)
            })

            const res = await req.json()
            console.log(res)
            if (res.values !== 'failed' && res.values !== 'exists') {
                // Pegar estado atual do localStorage e adicionar novo ID.
                // const storage = getStorage()
                // if (storage) {
                //     const currentShows = JSON.parse(storage.shows)
                //     console.log(currentShows)
                //     currentShows.push(parseInt(params.show_id))
                //     storage.shows = JSON.stringify(currentShows)
                //     localStorage.setItem('cine-js-auth', JSON.stringify(storage))
                // }
                localStorage.setItem(`${res.key}`, JSON.stringify(res.values))
                window.location.reload(false)
                console.log('Deu bom')
            } else {
                console.log("Deu merda")
                setAddShowFailed(true)
            }
        }

        newShow.show_id !== '' && fetchAPI()

    }, [params.show_id, newShow])

    return (
        <MainContainer>
            <Container>
                <ShowImg>
                    <Image src={`https://image.tmdb.org/t/p/w400${shows.poster_path}`} alt='show_image' />
                </ShowImg>

                <ShowDetails>
                    <Title>{shows.title || shows.name}</Title>
                    <AddShowButton onClick={() => { setNewShow({ user_id: getMyID(), show_id: params.show_id }) }}>Adicionar à lista</AddShowButton>
                    {
                        addShowFailed && <span>Algo de errado não deu certo!</span>
                    }
                    <Sinopsis>
                        <p>{shows.overview}</p>
                    </Sinopsis>
                </ShowDetails>
            </Container>
        </MainContainer>
    )
}