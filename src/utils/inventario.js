// Un producto se considera con stock bajo cuando tiene menos unidades que este umbral
export const UMBRAL_STOCK_BAJO = 20;

export const FILTROS_INICIALES = { texto: '', tipo: '', estado: 'todos' };

export function estaConStockBajo(stock) {
  return stock < UMBRAL_STOCK_BAJO;
}

// Devuelve 'agotado' | 'bajo' | 'disponible'
export function obtenerEstadoStock(stock) {
  if (stock === 0) return 'agotado';
  return estaConStockBajo(stock) ? 'bajo' : 'disponible';
}

// Devuelve un NUEVO arreglo filtrado; el inventario original no se modifica
export function filtrarProductos(productos, { texto, tipo, estado }) {
  const busqueda = texto.trim().toLowerCase();

  return productos.filter((p) => {
    const coincideTexto =
      !busqueda ||
      p.nombre.toLowerCase().includes(busqueda) ||
      p.marca.toLowerCase().includes(busqueda);
    const coincideTipo = !tipo || p.tipo === tipo;
    const coincideEstado = estado === 'todos' || obtenerEstadoStock(p.stock) === estado;

    return coincideTexto && coincideTipo && coincideEstado;
  });
}

export function formatearPrecio(valor) {
  return `$${valor.toLocaleString('es-CL')}`;
}