import { useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import FormularioProducto from '../components/FormularioProducto';

function AgregarArticulo() {
  const { agregarProducto } = useInventario();
  const navigate = useNavigate();

  const handleSubmit = (nuevo) => {
    agregarProducto(nuevo);
    navigate('/inventario');
  };

  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Agregar artículo</h1>
      <p>Completa los datos para ingresar un nuevo artículo al inventario.</p>

      <FormularioProducto textoBoton="Agregar al inventario" onSubmit={handleSubmit} />
    </section>
  );
}

export default AgregarArticulo;