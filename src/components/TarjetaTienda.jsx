function TarjetaTienda({ tienda }) {
  return (
    <article className="tarjeta-tienda">
      <h2>{tienda.nombre}</h2>
      <p>{tienda.direccion}</p>
      <p>{tienda.horario}</p>
    </article>
  );
}

export default TarjetaTienda;