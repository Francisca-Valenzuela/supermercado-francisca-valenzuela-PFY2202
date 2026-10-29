function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <p>Supermercado | Gestión de Inventario</p>
      <p>Proyecto PFY2202, Duoc UC · {anio}</p>
    </footer>
  );
}

export default Footer;