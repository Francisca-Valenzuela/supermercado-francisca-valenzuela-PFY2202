import { tiendas } from '../data/tiendas';

function NuestrasTiendas() {

  return (
    <section className="page">
      <h1>Nuestras tiendas</h1>
      <p>Encuentra la sucursal más cercana a ti:</p>

      <div className="lista-tiendas">
        {tiendas.map((t) => (
          <article key={t.id} className="tarjeta-tienda">
            <h2>{t.nombre}</h2>
            <p>{t.direccion}</p>
            <p>{t.horario}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;