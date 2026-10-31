import { tiendas } from '../data/tiendas';
import TarjetaTienda from '../components/TarjetaTienda';

function NuestrasTiendas() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Nuestras tiendas</h1>
      <p>Encuentra la sucursal más cercana a ti:</p>

      <div className="grid gap-4 mt-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {tiendas.map((t) => (
          <TarjetaTienda key={t.id} tienda={t} />
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;