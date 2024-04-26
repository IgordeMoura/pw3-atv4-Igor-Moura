
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './Components/Navbar/NavBar';
import Container from './Components/Container/Container';

//paginas
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Lista from './pages/Lista/Lista';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<Navbar/>}>
                  
              <Route index element={<Home/>}/>
              <Route path='/Cadastro' element={<Cadastro/>}/>
              <Route path='/Lista' element={<Lista/>}/>
                  
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
