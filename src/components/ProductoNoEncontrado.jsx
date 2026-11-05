import Boton from './Boton';

function ProductoNoEncontrado() {
  return (
    <section className="flex flex-col gap-3 items-start">
      <h1 className="text-3xl font-bold text-green-900">Artículo no encontrado</h1>
      <p>El artículo que buscas no existe o fue eliminado del inventario.</p>
      <Boton to="/inventario">Volver al inventario</Boton>
    </section>
  );
}

export default ProductoNoEncontrado;