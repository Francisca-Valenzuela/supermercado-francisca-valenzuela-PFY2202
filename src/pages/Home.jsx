import { productos } from '../data/productos';
import { estaConStockBajo } from '../utils/inventario';

function Home() {
  return (
    <section className="page">
      <h1>Gestión de Inventario</h1>
      <p>
        Bienvenido al sistema de inventario del supermercado. Aquí puedes revisar
        el stock disponible de los productos.
      </p>

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
            {productos.map((p) => {
              const stockBajo = estaConStockBajo(p.stock);

              return (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>{p.categoria}</td>
                  <td className="num">{p.stock}</td>
                  <td className="num">${p.precio.toLocaleString('es-CL')}</td>
                  <td className={stockBajo ? 'stock-bajo' : 'stock-ok'}>
                    {stockBajo ? 'Stock bajo' : 'Disponible'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Home;