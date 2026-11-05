import Boton from './Boton';
import EstadoStock from './EstadoStock';
import { formatearPrecio } from '../utils/inventario';

const celda = 'p-3 border-b border-gray-200';

function FilaProducto({ producto }) {
  return (
    <tr>
      <td className={celda}>{producto.nombre}</td>
      <td className={celda}>{producto.marca}</td>
      <td className={celda}>{producto.tipo}</td>
      <td className={`${celda} text-right`}>{producto.stock}</td>
      <td className={`${celda} text-right`}>{formatearPrecio(producto.precio)}</td>
      <td className={celda}>
        <EstadoStock stock={producto.stock} />
      </td>
      <td className={celda}>
        <Boton
          to={`/inventario/${producto.id}`}
          variante="secundario"
          tamano="chico"
          aria-label={`Ver detalle de ${producto.nombre}`}
        >
          Ver detalle
        </Boton>
      </td>
    </tr>
  );
}

export default FilaProducto;