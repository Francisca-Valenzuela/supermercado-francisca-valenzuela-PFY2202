import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import AgregarArticulo from './pages/AgregarArticulo';
import QuienesSomos from './pages/QuienesSomos';
import NuestrasTiendas from './pages/NuestrasTiendas';
import NoEncontrada from './pages/NoEncontrada';


function App() {
  return (
    <InventarioProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/agregar" element={<AgregarArticulo />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </Router>
    </InventarioProvider>
  );
}

export default App;