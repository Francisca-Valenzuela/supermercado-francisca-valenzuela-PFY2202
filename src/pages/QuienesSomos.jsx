import { Link } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import { valores } from '../data/valores';

const h2 = 'mt-3 text-2xl font-semibold text-green-800';
const enlace = 'text-green-800 underline';

function QuienesSomos() {
  const { productos } = useInventario();
  const tipos = [...new Set(productos.map((p) => p.tipo))];

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-green-900">Quiénes somos</h1>

      <figure className="my-2">
        <img
          className="block w-full max-h-72 object-cover rounded-lg"
          src="/img/local.jpg"
          alt="Interior de un supermercado con góndolas ordenadas"
        />
        <figcaption className="mt-1.5 text-sm text-gray-600">
          Un supermercado de barrio pensado para tu familia.
        </figcaption>
      </figure>

      <p>
        Somos un supermercado comprometido con ofrecer productos frescos y de calidad a las
        familias de nuestra comunidad, con precios justos y un servicio cercano.
      </p>

      <h2 className={h2}>Misión</h2>
      <p>
        Facilitar el acceso a productos de calidad, manteniendo un inventario ordenado y
        siempre disponible para nuestros clientes.
      </p>

      <h2 className={h2}>Visión</h2>
      <p>
        Ser el supermercado de barrio preferido, reconocido por su confianza, eficiencia y
        atención al cliente.
      </p>

      <h2 className={h2}>Nuestros valores</h2>
      <ul className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {valores.map((v) => (
          <li key={v.id} className="flex flex-col gap-1 p-3.5 bg-white rounded-lg shadow">
            <strong className="text-green-800">{v.titulo}</strong>
            <span>{v.descripcion}</span>
          </li>
        ))}
      </ul>

      <h2 className={h2}>Qué encontrarás con nosotros</h2>
      <div className="flex flex-wrap items-center gap-4">
        <img
          className="flex-[1_1_260px] max-w-full h-52 object-cover rounded-lg"
          src="/img/productos-frescos.jpg"
          alt="Frutas y verduras frescas en exhibición"
        />
        <div className="flex-[1_1_220px]">
          <p>Trabajamos con las siguientes categorías de productos:</p>
          <ul className="list-disc pl-5 mt-2">
            {tipos.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className={h2}>Contacto</h2>
      <p>
        ¿Tienes dudas o comentarios? Escríbenos a{' '}
        <a className={enlace} href="mailto:contacto@supermercado.cl">
          contacto@supermercado.cl
        </a>{' '}
        o visita la sección{' '}
        <Link className={enlace} to="/nuestras-tiendas">
          Nuestras tiendas
        </Link>{' '}
        para encontrar la sucursal más cercana.
      </p>
    </section>
  );
}

export default QuienesSomos;