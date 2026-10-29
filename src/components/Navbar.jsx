import { NavLink } from 'react-router-dom';

function Navbar() {
  const claseEnlace = ({ isActive }) =>
    isActive ? 'nav-link activo' : 'nav-link';

  return (
    <nav className="navbar-inferior" aria-label="Navegación principal">
      <NavLink to="/" end className={claseEnlace}>
        Inicio
      </NavLink>
      <NavLink to="/quienes-somos" className={claseEnlace}>
        Quiénes somos
      </NavLink>
      <NavLink to="/nuestras-tiendas" className={claseEnlace}>
        Nuestras tiendas
      </NavLink>
    </nav>
  );
}

export default Navbar;