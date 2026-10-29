import { estaConStockBajo } from '../utils/inventario';

function FilaProducto({ producto }) {
  const stockBajo = estaConStockBajo(producto.stock);

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td className="num">{producto.stock}</td>
      <td className="num">${producto.precio.toLocaleString('es-CL')}</td>
      <td className={stockBajo ? 'stock-bajo' : 'stock-ok'}>
        {stockBajo ? 'Stock bajo' : 'Disponible'}
      </td>
    </tr>
  );
}

export default FilaProducto;