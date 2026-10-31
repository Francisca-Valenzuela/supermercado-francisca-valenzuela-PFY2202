import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-green-900">Página no encontrada</h1>
      <p>La dirección que buscas no existe o fue movida.</p>
      <Link to="/" className="inline-block py-2 font-semibold text-green-800 underline">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NoEncontrada;