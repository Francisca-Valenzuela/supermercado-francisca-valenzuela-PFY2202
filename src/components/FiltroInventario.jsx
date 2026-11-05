import Campo from './Campo';
import Boton from './Boton';
import { tiposProducto } from '../data/productos';

function FiltroInventario({ filtros, onChange, onLimpiar, mostrados, total }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filtros, [name]: value });
  };

  return (
    <form
      role="search"
      aria-label="Filtrar inventario"
      onSubmit={(e) => e.preventDefault()}
      className="mt-5 flex flex-col gap-4 bg-white p-4 rounded-lg shadow"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Campo etiqueta="Buscar por nombre o marca" nombre="texto">
          <input
            id="texto"
            name="texto"
            type="search"
            value={filtros.texto}
            onChange={handleChange}
            placeholder="Ej: leche, Colún"
            className="campo-input"
          />
        </Campo>

        <Campo etiqueta="Tipo de producto" nombre="tipo">
          <select
            id="tipo"
            name="tipo"
            value={filtros.tipo}
            onChange={handleChange}
            className="campo-input"
          >
            <option value="">Todos los tipos</option>
            {tiposProducto.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Campo>

        <Campo etiqueta="Estado del stock" nombre="estado">
          <select
            id="estado"
            name="estado"
            value={filtros.estado}
            onChange={handleChange}
            className="campo-input"
          >
            <option value="todos">Todos</option>
            <option value="disponible">Disponible</option>
            <option value="bajo">Stock bajo</option>
            <option value="agotado">Agotado</option>
          </select>
        </Campo>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p role="status" aria-live="polite" className="text-sm text-gray-600">
          Mostrando {mostrados} de {total} artículos.
        </p>
        <Boton variante="secundario" onClick={onLimpiar}>
          Limpiar filtros
        </Boton>
      </div>
    </form>
  );
}

export default FiltroInventario;