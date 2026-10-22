function NuestrasTiendas() {
  const tiendas = [
    { id: 1, nombre: 'Sucursal Centro', direccion: 'Av. Principal 123, Santiago', horario: 'Lunes a domingo, 8:00 a 22:00' },
    { id: 2, nombre: 'Sucursal Providencia', direccion: 'Av. Los Leones 456, Providencia', horario: 'Lunes a domingo, 8:00 a 22:00' },
    { id: 3, nombre: 'Sucursal Maipú', direccion: 'Camino a Rinconada 789, Maipú', horario: 'Lunes a sábado, 9:00 a 21:00' },
  ];

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