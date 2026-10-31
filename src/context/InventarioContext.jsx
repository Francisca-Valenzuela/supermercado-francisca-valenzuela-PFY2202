import { createContext, useContext, useState } from 'react';
import { productos as productosIniciales } from '../data/productos';

const InventarioContext = createContext(null);

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (nuevo) => {
    setProductos((prev) => {
      const siguienteId = prev.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      return [...prev, { ...nuevo, id: siguienteId }];
    });
  };

  return (
    <InventarioContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </InventarioContext.Provider>
  );
}

export function useInventario() {
  const contexto = useContext(InventarioContext);
  if (!contexto) {
    throw new Error('useInventario debe usarse dentro de InventarioProvider');
  }
  return contexto;
}