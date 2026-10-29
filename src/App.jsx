import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import NoEncontrada from './pages/NoEncontrada';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </main>

        <Navbar />
      </div>
    </Router>
  );
}

export default App;