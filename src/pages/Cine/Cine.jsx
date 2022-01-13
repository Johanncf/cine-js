import { useEffect, useState } from 'react'
import api from '../../dependencies/api'
import Header from '../../components/Header';
import ShowSection from '../../components/ShowSection';

function Cine() {
    const [shows, setShows] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await api.getHomeList()
            setShows(res)
        }

        apiCall()
    }, [])

    return (
        <div>
          <main className='main_container'>
            {
              shows.map((item, key) => {
                return <ShowSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
              })
            }
          </main>
        </div>
      );
}

export default Cine;