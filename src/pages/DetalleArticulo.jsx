import { useNavigate, useParams } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import { formatearPrecio } from '../utils/inventario';
import Boton from '../components/Boton';
import ControlStock from '../components/ControlStock';
import EstadoStock from '../components/EstadoStock';
import ProductoNoEncontrado from '../components/ProductoNoEncontrado';

const dt = 'mt-3 text-sm font-semibold text-green-800';
const dd = 'mt-0.5';

function DetalleArticulo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { obtenerProducto, ajustarStock, eliminarProducto } = useInventario();

  const producto = obtenerProducto(id);
  if (!producto) return <ProductoNoEncontrado />;

  const handleEliminar = () => {
    if (window.confirm(`¿Eliminar "${producto.nombre}" del inventario?`)) {
      eliminarProducto(producto.id);
      navigate('/inventario');
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <div>
        <Boton to="/inventario" variante="secundario" tamano="chico">
          ← Volver al inventario
        </Boton>
      </div>

      <h1 className="text-3xl font-bold text-green-900">{producto.nombre}</h1>

      <article className="bg-white p-5 rounded-lg shadow">
        <dl className="grid gap-x-6 sm:grid-cols-2">
          <div>
            <dt className={dt}>Marca</dt>
            <dd className={dd}>{producto.marca}</dd>
          </div>
          <div>
            <dt className={dt}>Tipo de producto</dt>
            <dd className={dd}>{producto.tipo}</dd>
          </div>
          <div>
            <dt className={dt}>Precio unitario</dt>
            <dd className={dd}>{formatearPrecio(producto.precio)}</dd>
          </div>
          <div>
            <dt className={dt}>Valor total en inventario</dt>
            <dd className={dd}>{formatearPrecio(producto.precio * producto.stock)}</dd>
          </div>
          <div>
            <dt className={dt}>Stock actual</dt>
            <dd className={dd} aria-live="polite">
              {producto.stock} unidades
            </dd>
          </div>
          <div>
            <dt className={dt}>Estado</dt>
            <dd className={dd}>
              <EstadoStock stock={producto.stock} />
            </dd>
          </div>
        </dl>
      </article>

      <section className="bg-white p-5 rounded-lg shadow flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-green-800">Actualizar stock</h2>
        <p className="text-sm text-gray-600">
          Suma o resta unidades según entradas y salidas de mercadería.
        </p>
        <ControlStock stock={producto.stock} onAjustar={(delta) => ajustarStock(producto.id, delta)} />
      </section>

      <div className="flex flex-wrap gap-3">
        <Boton to={`/inventario/${producto.id}/editar`}>Editar artículo</Boton>
        <Boton variante="peligro" onClick={handleEliminar}>
          Eliminar artículo
        </Boton>
      </div>
    </section>
  );
}

export default DetalleArticulo;