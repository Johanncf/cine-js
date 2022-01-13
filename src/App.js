import './App.css';
import Header from './components/Header';
import Cine from './pages/Cine/Cine';
import Filmes from './pages/Filmes/Filmes'
import Login from './pages/Login/Login';
import Series from './pages/Series/Series';

import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cine />}> </Route>
        <Route path='/filmes' element={<Filmes />}></Route>
        <Route path='/series' element={<Series />}></Route>
      </Routes>
    </>
  );
}

export default App;
