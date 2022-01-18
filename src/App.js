import './App.css';
import Header from './components/Header';
import Cine from './pages/Cine/Cine';
import Filmes from './pages/Filmes/Filmes'
import Series from './pages/Series/Series';
import ShowInfo from './pages/Show/ShowInfo';

import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer';
import MinhaLista from './pages/MinhaLista/MinhaLista';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cine />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route exact path='/cine' element={<Cine />}></Route>
        <Route path='/filmes' element={<Filmes />}></Route>
        <Route path='/series' element={<Series />}></Route>
        <Route path='/cine/:show_id' element={<ShowInfo />}></Route>
        <Route path='/minha-lista' element={<MinhaLista />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
