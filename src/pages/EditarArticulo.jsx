import { useNavigate, useParams } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import FormularioProducto from '../components/FormularioProducto';
import ProductoNoEncontrado from '../components/ProductoNoEncontrado';

function EditarArticulo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { obtenerProducto, actualizarProducto } = useInventario();

  const producto = obtenerProducto(id);
  if (!producto) return <ProductoNoEncontrado />;

  const handleSubmit = (cambios) => {
    actualizarProducto(producto.id, cambios);
    navigate(`/inventario/${producto.id}`);
  };

  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Editar artículo</h1>
      <p>Modifica los datos de «{producto.nombre}» y guarda los cambios.</p>

      <FormularioProducto
        valorInicial={producto}
        textoBoton="Guardar cambios"
        onSubmit={handleSubmit}
        cancelarA={`/inventario/${producto.id}`}
      />
    </section>
  );
}

export default EditarArticulo;