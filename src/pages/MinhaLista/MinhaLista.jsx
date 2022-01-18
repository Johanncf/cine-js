import getStorage from "../../utils/getStorage"
import api from "../../dependencies/api"
import isAuthenticated from "../../utils/auth"

import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"
import { MainContainer } from "../main.styled.elements"
import { MoviesContainer } from "./styled.elements"
import Show from "../../components/Show"

const storage = getStorage()

let minhaLista = []

if (storage) {
    minhaLista = JSON.parse(storage.shows)
}

export default function MinhaLista() {

    const [shows, setShows] = useState([])

    const redirect = useNavigate()

    useEffect(() => {
        const apiCall = async () => {
            const res = await api.getHomeList()
            const obj = res
                .map(section => {
                    return (
                        section.items.results
                            .filter(result => minhaLista.some(element => element.toString() === (result.id).toString()))
                    )
                })
                .filter(e => e.length > 0)
            const allShows = []
            obj.map(section => {
                return allShows.push(...section)
            })
            const uniqueShows = allShows.filter((element, index) => {
                if(allShows.find((next, Nindex) => (next.id === element.id) && (Nindex > index))) {
                    return false
                } else {
                    return true
                }
            })
            setShows(uniqueShows)
        }

        isAuthenticated() ? (
            apiCall()
        ) : redirect('/login')
    }, [redirect])


    return (
        <MainContainer>
            <MoviesContainer>
                {
                    shows.map(show => {
                        return (
                            <div className="movie_item" key={show.id}>
                                <Show key={show.id} img={show.poster_path} show_id={show.id} alt={show.title} />
                            </div>
                        )
                    })
                }

            </MoviesContainer>
        </MainContainer>
    )
}