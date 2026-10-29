import FilaProducto from './FilaProducto';

function TablaInventario({ productos }) {
  return (
    <div className="tabla-contenedor">
      <table className="tabla-inventario">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Categoría</th>
            <th scope="col" className="num">Stock</th>
            <th scope="col" className="num">Precio</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <FilaProducto key={p.id} producto={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaInventario;