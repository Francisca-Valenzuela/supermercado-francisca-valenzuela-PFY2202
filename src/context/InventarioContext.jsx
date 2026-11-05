import { createContext, useContext, useMemo, useReducer } from 'react';
import { productos as productosIniciales } from '../data/productos';

const InventarioContext = createContext(null);

// Reducer: toda modificación del inventario es inmutable (crea nuevos arrays/objetos)
function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case 'agregar': {
      const siguienteId = estado.reduce((max, p) => Math.max(max, p.id), 0) + 1;
      return [...estado, { ...accion.producto, id: siguienteId }];
    }
    case 'actualizar':
      return estado.map((p) => (p.id === accion.id ? { ...p, ...accion.cambios } : p));
    case 'ajustarStock':
      return estado.map((p) =>
        p.id === accion.id ? { ...p, stock: Math.max(0, p.stock + accion.delta) } : p
      );
    case 'eliminar':
      return estado.filter((p) => p.id !== accion.id);
    default:
      return estado;
  }
}

export function InventarioProvider({ children }) {
  const [productos, dispatch] = useReducer(inventarioReducer, productosIniciales);

  const valor = useMemo(
    () => ({
      productos,
      obtenerProducto: (id) => productos.find((p) => p.id === Number(id)),
      agregarProducto: (producto) => dispatch({ type: 'agregar', producto }),
      actualizarProducto: (id, cambios) => dispatch({ type: 'actualizar', id, cambios }),
      ajustarStock: (id, delta) => dispatch({ type: 'ajustarStock', id, delta }),
      eliminarProducto: (id) => dispatch({ type: 'eliminar', id }),
    }),
    [productos]
  );

  return <InventarioContext.Provider value={valor}>{children}</InventarioContext.Provider>;
}

export function useInventario() {
  const contexto = useContext(InventarioContext);
  if (!contexto) {
    throw new Error('useInventario debe usarse dentro de InventarioProvider');
  }
  return contexto;
}