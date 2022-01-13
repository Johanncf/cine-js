import { useEffect, useState } from 'react'
import api from '../../dependencies/api'
import ShowSection from '../../components/ShowSection';

function Filmes() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await api.getMovieList()
            setMovies(res)
        }

        apiCall()
    }, [])

    return (
        <div>
          <main className='main_container'>
            {
              movies.map((item, key) => {
                return <ShowSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
              })
            }
          </main>
        </div>
      );
}

export default Filmes;