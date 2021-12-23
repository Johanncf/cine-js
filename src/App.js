import './App.css';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import api from './dependencies/api'
import { useEffect, useState } from 'react'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const res = await api.getHomeList()
      setMovies(res)
    }

    apiCall()
  }, [])

  return (
    <div>
      <Header />
      <main className='main_container'>
        {
          movies.map((item, key) => {
            return <MovieSection title={item.title} slug={item.slug} movies={item.items.results} key={key} />
          })
        }
      </main>
    </div>
  );
}

export default App;
