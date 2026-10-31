function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="px-4 py-4 text-center text-sm text-gray-600 border-t border-gray-200">
      <p className="my-1">Supermercado | Gestión de Inventario</p>
      <p className="my-1">Proyecto PFY2202, Duoc UC · {anio}</p>
    </footer>
  );
}

export default Footer;