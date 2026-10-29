import { Link } from 'react-router-dom';
import { productos } from '../data/productos';
import { valores } from '../data/valores';

function QuienesSomos() {
  const categorias = [...new Set(productos.map((p) => p.categoria))];

  return (
    <section className="page">
      <h1>Quiénes somos</h1>

      <figure className="figura-principal">
        <img
          src="/img/local.jpg"
          alt="Interior de un supermercado con góndolas ordenadas"
        />
        <figcaption>Un supermercado de barrio pensado para tu familia.</figcaption>
      </figure>

      <p>
        Somos un supermercado comprometido con ofrecer productos frescos y de
        calidad a las familias de nuestra comunidad, con precios justos y un
        servicio cercano.
      </p>

      <h2>Misión</h2>
      <p>
        Facilitar el acceso a productos de calidad, manteniendo un inventario
        ordenado y siempre disponible para nuestros clientes.
      </p>

      <h2>Visión</h2>
      <p>
        Ser el supermercado de barrio preferido, reconocido por su confianza,
        eficiencia y atención al cliente.
      </p>

      <h2>Nuestros valores</h2>
      <ul className="lista-valores">
        {valores.map((v) => (
          <li key={v.id}>
            <strong>{v.titulo}</strong>
            <span>{v.descripcion}</span>
          </li>
        ))}
      </ul>

      <h2>Qué encontrarás con nosotros</h2>
      <div className="bloque-productos">
        <img
          src="/img/productos-frescos.jpg"
          alt="Frutas y verduras frescas en exhibición"
        />
        <div>
          <p>Trabajamos con las siguientes categorías de productos:</p>
          <ul>
            {categorias.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Contacto</h2>
      <p>
        ¿Tienes dudas o comentarios? Escríbenos a{' '}
        <a href="mailto:contacto@supermercado.cl">contacto@supermercado.cl</a>{' '}
        o visita la sección <Link to="/nuestras-tiendas">Nuestras tiendas</Link>{' '}
        para encontrar la sucursal más cercana.
      </p>
    </section>
  );
}

export default QuienesSomos;