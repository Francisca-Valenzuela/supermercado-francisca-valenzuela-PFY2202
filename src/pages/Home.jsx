import { Link } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import { estaConStockBajo } from '../utils/inventario';

const boton =
  'inline-flex items-center min-h-11 px-4 rounded-lg font-semibold bg-green-900 text-white hover:bg-green-800';

function Home() {
  const { productos } = useInventario();
  const stockBajo = productos.filter((p) => estaConStockBajo(p.stock)).length;

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-green-900">Gestión de Inventario</h1>
      <p>
        Bienvenido al sistema de inventario del supermercado. Aquí puedes revisar el stock
        disponible y agregar nuevos artículos.
      </p>

      <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-2">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600">Artículos en inventario</p>
          <p className="text-3xl font-bold text-green-900">{productos.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600">Con stock bajo</p>
          <p className="text-3xl font-bold text-red-700">{stockBajo}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-2">
        <Link to="/inventario" className={boton}>Ver inventario</Link>
        <Link to="/agregar" className={boton}>Agregar artículo</Link>
      </div>
    </section>
  );
}

export default Home;