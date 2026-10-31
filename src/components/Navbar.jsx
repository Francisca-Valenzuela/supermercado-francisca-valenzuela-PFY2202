import { NavLink } from 'react-router-dom';

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/inventario', texto: 'Inventario' },
  { to: '/agregar', texto: 'Agregar artículo' },
  { to: '/quienes-somos', texto: 'Quiénes somos' },
  { to: '/nuestras-tiendas', texto: 'Nuestras tiendas' },
];

const base =
  'flex items-center min-h-11 px-3 sm:px-4 rounded-lg text-sm sm:text-base font-semibold ' +
  'focus-visible:outline-3 focus-visible:outline-amber-400 focus-visible:outline-offset-2';

function Navbar() {
  const claseEnlace = ({ isActive }) =>
    `${base} ${isActive ? 'bg-white text-green-900' : 'text-emerald-100 hover:bg-white/15'}`;

  return (
    <header className="sticky top-0 z-10 bg-green-900 shadow-md">
      <nav
        className="flex flex-wrap items-center justify-center gap-1 sm:gap-6 p-2 max-w-4xl mx-auto"
        aria-label="Navegación principal"
      >
        {enlaces.map((e) => (
          <NavLink key={e.to} to={e.to} end={e.end} className={claseEnlace}>
            {e.texto}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;