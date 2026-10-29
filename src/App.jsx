import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import NoEncontrada from './pages/NoEncontrada';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;