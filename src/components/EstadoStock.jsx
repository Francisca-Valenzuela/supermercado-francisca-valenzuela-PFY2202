import { obtenerEstadoStock } from '../utils/inventario';

const estados = {
  agotado: { texto: 'Agotado', clase: 'text-red-700' },
  bajo: { texto: 'Stock bajo', clase: 'text-amber-700' },
  disponible: { texto: 'Disponible', clase: 'text-green-800' },
};

function EstadoStock({ stock }) {
  const { texto, clase } = estados[obtenerEstadoStock(stock)];
  return <span className={`font-semibold ${clase}`}>{texto}</span>;
}

export default EstadoStock;