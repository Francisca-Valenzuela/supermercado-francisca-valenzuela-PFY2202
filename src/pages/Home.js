function Home() {
  const productos = [
    { id: 1, nombre: 'Arroz grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, precio: 1290 },
    { id: 2, nombre: 'Leche entera (1 L)', categoria: 'Lácteos', stock: 15, precio: 990 },
    { id: 3, nombre: 'Pan de molde', categoria: 'Panadería', stock: 48, precio: 1850 },
    { id: 4, nombre: 'Manzanas (1 kg)', categoria: 'Frutas y verduras', stock: 9, precio: 1590 },
    { id: 5, nombre: 'Aceite vegetal (1 L)', categoria: 'Abarrotes', stock: 75, precio: 2490 },
  ];

  return (
   <div className="tabla-contenedor">
  <table className="tabla-inventario">
    <thead>
      <tr>
        <th scope="col">Producto</th>
        <th scope="col">Categoría</th>
        <th scope="col" className="num">Stock</th>
        <th scope="col" className="num">Precio</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody>
      {productos.map((p) => (
        <tr key={p.id}>
          <td>{p.nombre}</td>
          <td>{p.categoria}</td>
          <td className="num">{p.stock}</td>
          <td className="num">${p.precio.toLocaleString('es-CL')}</td>
          <td className={p.stock < 20 ? 'stock-bajo' : 'stock-ok'}>
            {p.stock < 20 ? 'Stock bajo' : 'Disponible'}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default Home;