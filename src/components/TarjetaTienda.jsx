function TarjetaTienda({ tienda }) {
  const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(
    tienda.direccion
  )}&output=embed`;

  return (
    <article className="bg-white p-4 rounded-lg shadow">
      <h2 className="mb-3 text-xl font-semibold text-green-800">{tienda.nombre}</h2>

      <iframe
        className="block w-full h-44 mb-3 border-0 rounded-md bg-gray-200"
        title={`Mapa de ${tienda.nombre}`}
        src={urlMapa}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <dl>
        <dt className="mt-2.5 text-sm font-semibold text-green-800">Dirección</dt>
        <dd className="mt-0.5">{tienda.direccion}</dd>

        <dt className="mt-2.5 text-sm font-semibold text-green-800">Horario</dt>
        <dd className="mt-0.5">{tienda.horario}</dd>

        <dt className="mt-2.5 text-sm font-semibold text-green-800">Teléfono</dt>
        <dd className="mt-0.5">
          <a
            className="text-green-800 underline"
            href={`tel:${tienda.telefono.replace(/\s/g, '')}`}
          >
            {tienda.telefono}
          </a>
        </dd>

        <dt className="mt-2.5 text-sm font-semibold text-green-800">Correo</dt>
        <dd className="mt-0.5">
          <a className="text-green-800 underline" href={`mailto:${tienda.correo}`}>
            {tienda.correo}
          </a>
        </dd>
      </dl>
    </article>
  );
}

export default TarjetaTienda;