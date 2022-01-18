import { MainContainer } from '../main.styled.elements';

import { useEffect, useState } from 'react'
import api from '../../dependencies/api'
import ShowSection from '../../components/ShowSection';

import { useNavigate } from "react-router-dom"
import isAuthenticated from '../../utils/auth';

function Series() {
  const redirect = useNavigate()
  const [series, setSeries] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const res = await api.getSerieList()
      setSeries(res)
    }

    isAuthenticated() ? apiCall() : redirect('/login')
  }, [redirect])

  return (
    <MainContainer>
      {
        series.map((item, key) => {
          return <ShowSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
        })
      }
    </MainContainer>
  );
}

export default Series;