function TarjetaTienda({ tienda }) {
  const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(
    tienda.direccion
  )}&output=embed`;

  return (
    <article className="tarjeta-tienda">
      <h2>{tienda.nombre}</h2>

      <iframe
        className="mapa-tienda"
        title={`Mapa de ${tienda.nombre}`}
        src={urlMapa}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <dl className="datos-tienda">
        <dt>Dirección</dt>
        <dd>{tienda.direccion}</dd>

        <dt>Horario</dt>
        <dd>{tienda.horario}</dd>

        <dt>Teléfono</dt>
        <dd>
          <a href={`tel:${tienda.telefono.replace(/\s/g, '')}`}>
            {tienda.telefono}
          </a>
        </dd>

        <dt>Correo</dt>
        <dd>
          <a href={`mailto:${tienda.correo}`}>{tienda.correo}</a>
        </dd>
      </dl>
    </article>
  );
}

export default TarjetaTienda;