import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <section className="page">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o fue movida.</p>
      <Link to="/" className="enlace-volver">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NoEncontrada;