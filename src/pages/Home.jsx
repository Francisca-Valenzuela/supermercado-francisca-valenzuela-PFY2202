import { productos } from '../data/productos';
import TablaInventario from '../components/TablaInventario';

function Home() {
  return (
    <section className="page">
      <h1>Gestión de Inventario</h1>
      <p>
        Bienvenido al sistema de inventario del supermercado. Aquí puedes revisar
        el stock disponible de los productos.
      </p>

      <TablaInventario productos={productos} />
    </section>
  );
}

export default Home;