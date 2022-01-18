import { MainContainer } from '../main.styled.elements';

import { useEffect, useState } from 'react'
import api from '../../dependencies/api'
import ShowSection from '../../components/ShowSection';

import { useNavigate } from "react-router-dom"
import isAuthenticated from '../../utils/auth';


function Cine() {

  const redirect = useNavigate()
  const [shows, setShows] = useState([])

  useEffect(() => {

    const apiCall = async () => {
      const res = await api.getHomeList()
      setShows(res)
    }

    isAuthenticated() ? apiCall() : redirect('/login')
  }, [redirect])

  return (
    <MainContainer>
      {
        shows.map((item, key) => {
          return <ShowSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
        })
      }
    </MainContainer>
  );
}

export default Cine;