import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center min-h-11 rounded-lg font-semibold ' +
  'focus-visible:outline-3 focus-visible:outline-amber-400 focus-visible:outline-offset-2 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

const variantes = {
  primario: 'bg-green-900 text-white hover:bg-green-800',
  secundario: 'bg-white text-green-900 border border-green-900 hover:bg-green-50',
  peligro: 'bg-red-700 text-white hover:bg-red-800',
};

const tamanos = {
  normal: 'px-4',
  chico: 'px-3 text-sm',
};

// Si recibe "to" se renderiza como enlace de React Router; si no, como <button>
function Boton({ to, variante = 'primario', tamano = 'normal', className = '', children, ...resto }) {
  const clases = `${base} ${variantes[variante]} ${tamanos[tamano]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={clases} {...resto}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={clases} {...resto}>
      {children}
    </button>
  );
}

export default Boton;