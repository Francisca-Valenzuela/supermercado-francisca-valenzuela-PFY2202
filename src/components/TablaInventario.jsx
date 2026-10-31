import FilaProducto from './FilaProducto';

const th = 'bg-green-900 text-white p-3 text-left';

function TablaInventario({ productos }) {
  if (productos.length === 0) {
    return <p className="mt-5">No hay artículos en el inventario.</p>;
  }

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow">
        <thead>
          <tr>
            <th scope="col" className={th}>Producto</th>
            <th scope="col" className={th}>Marca</th>
            <th scope="col" className={th}>Tipo</th>
            <th scope="col" className={`${th} text-right`}>Stock</th>
            <th scope="col" className={`${th} text-right`}>Precio</th>
            <th scope="col" className={th}>Estado</th>
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