import { estaConStockBajo } from '../utils/inventario';

const celda = 'p-3 border-b border-gray-200';

function FilaProducto({ producto }) {
  const stockBajo = estaConStockBajo(producto.stock);

  return (
    <tr>
      <td className={celda}>{producto.nombre}</td>
      <td className={celda}>{producto.marca}</td>
      <td className={celda}>{producto.tipo}</td>
      <td className={`${celda} text-right`}>{producto.stock}</td>
      <td className={`${celda} text-right`}>${producto.precio.toLocaleString('es-CL')}</td>
      <td className={`${celda} font-semibold ${stockBajo ? 'text-red-700' : 'text-green-800'}`}>
        {stockBajo ? 'Stock bajo' : 'Disponible'}
      </td>
    </tr>
  );
}

export default FilaProducto;