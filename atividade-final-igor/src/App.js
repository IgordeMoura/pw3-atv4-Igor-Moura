
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './Components/Navbar/NavBar';
import Container from './Components/Container/Container';

//paginas
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Lista from './pages/Lista/Lista';
import Editar from './pages/Editar/Editar';

function App() {
  return (
    <div className="app">

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<Navbar/>}>
                  
              <Route index element={<Home/>}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
              <Route path='/lista' element={<Lista/>}/>
              <Route path='/editar/:id' element={<Editar/>}/>
                  
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
