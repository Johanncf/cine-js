import { useEffect, useState } from 'react'
import api from '../../dependencies/api'
import ShowSection from '../../components/ShowSection';

function Series() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await api.getSerieList()
            setSeries(res)
        }

        apiCall()
    }, [])

    return (
        <div>
          <main className='main_container'>
            {
              series.map((item, key) => {
                return <ShowSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
              })
            }
          </main>
        </div>
      );
}

export default Series;