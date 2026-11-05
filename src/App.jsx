import { HashRouter } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './routes/AppRoutes';

// HashRouter: GitHub Pages no soporta recargar rutas internas con BrowserRouter
function App() {
  return (
    <InventarioProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </InventarioProvider>
  );
}

export default App;