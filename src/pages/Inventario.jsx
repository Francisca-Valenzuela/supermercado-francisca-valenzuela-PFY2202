import { useInventario } from '../context/InventarioContext';
import TablaInventario from '../components/TablaInventario';

function Inventario() {
  const { productos } = useInventario();

  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Inventario</h1>
      <p>Artículos actualmente disponibles en el inventario: {productos.length}.</p>

      <TablaInventario productos={productos} />
    </section>
  );
}

export default Inventario;