import { useMemo, useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { FILTROS_INICIALES, filtrarProductos } from '../utils/inventario';
import FiltroInventario from '../components/FiltroInventario';
import TablaInventario from '../components/TablaInventario';

function Inventario() {
  const { productos } = useInventario();
  const [filtros, setFiltros] = useState(FILTROS_INICIALES);

  // Lista derivada: el inventario original nunca se modifica al filtrar
  const visibles = useMemo(() => filtrarProductos(productos, filtros), [productos, filtros]);

  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Inventario</h1>
      <p>Artículos actualmente disponibles en el inventario: {productos.length}.</p>

      <FiltroInventario
        filtros={filtros}
        onChange={setFiltros}
        onLimpiar={() => setFiltros(FILTROS_INICIALES)}
        mostrados={visibles.length}
        total={productos.length}
      />

      <TablaInventario
        productos={visibles}
        mensajeVacio={
          productos.length === 0
            ? 'No hay artículos en el inventario.'
            : 'Ningún artículo coincide con los filtros seleccionados.'
        }
      />
    </section>
  );
}

export default Inventario;