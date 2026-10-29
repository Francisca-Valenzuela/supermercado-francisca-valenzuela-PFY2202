import { tiendas } from '../data/tiendas';
import TarjetaTienda from '../components/TarjetaTienda';

function NuestrasTiendas() {
  return (
    <section className="page">
      <h1>Nuestras tiendas</h1>
      <p>Encuentra la sucursal más cercana a ti:</p>

      <div className="lista-tiendas">
        {tiendas.map((t) => (
          <TarjetaTienda key={t.id} tienda={t} />
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;
