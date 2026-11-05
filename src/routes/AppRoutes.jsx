import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

// Lazy loading: cada página se descarga solo cuando se visita
const Home = lazy(() => import('../pages/Home'));
const Inventario = lazy(() => import('../pages/Inventario'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo'));
const EditarArticulo = lazy(() => import('../pages/EditarArticulo'));
const AgregarArticulo = lazy(() => import('../pages/AgregarArticulo'));
const QuienesSomos = lazy(() => import('../pages/QuienesSomos'));
const NuestrasTiendas = lazy(() => import('../pages/NuestrasTiendas'));
const NoEncontrada = lazy(() => import('../pages/NoEncontrada'));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Rutas anidadas con parámetro dinámico :id */}
        <Route path="/inventario">
          <Route index element={<Inventario />} />
          <Route path=":id" element={<DetalleArticulo />} />
          <Route path=":id/editar" element={<EditarArticulo />} />
        </Route>

        <Route path="/agregar" element={<AgregarArticulo />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;