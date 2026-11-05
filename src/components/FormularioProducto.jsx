import { useState } from 'react';
import Campo from './Campo';
import Boton from './Boton';
import { tiposProducto } from '../data/productos';

const FORM_VACIO = { nombre: '', marca: '', tipo: '', stock: '', precio: '' };

function aFormulario(producto) {
  if (!producto) return FORM_VACIO;
  return {
    nombre: producto.nombre,
    marca: producto.marca,
    tipo: producto.tipo,
    stock: String(producto.stock),
    precio: String(producto.precio),
  };
}

function validar(form) {
  const errores = {};

  if (!form.nombre.trim()) errores.nombre = 'Ingresa el nombre del producto.';
  if (!form.marca.trim()) errores.marca = 'Ingresa la marca.';
  if (!form.tipo) errores.tipo = 'Selecciona un tipo de producto.';

  const stock = Number(form.stock);
  if (form.stock === '' || !Number.isInteger(stock) || stock < 0) {
    errores.stock = 'El stock debe ser un número entero mayor o igual a 0.';
  }

  const precio = Number(form.precio);
  if (form.precio === '' || !Number.isFinite(precio) || precio <= 0) {
    errores.precio = 'El precio debe ser un número mayor a 0.';
  }

  return errores;
}

function FormularioProducto({ valorInicial = null, textoBoton, onSubmit, cancelarA }) {
  const [form, setForm] = useState(() => aFormulario(valorInicial));
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = validar(form);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onSubmit({
      nombre: form.nombre.trim(),
      marca: form.marca.trim(),
      tipo: form.tipo,
      stock: Number(form.stock),
      precio: Number(form.precio),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-5 flex flex-col gap-4 bg-white p-5 rounded-lg shadow"
    >
      <Campo etiqueta="Nombre" nombre="nombre" error={errores.nombre}>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          className="campo-input"
        />
      </Campo>

      <Campo etiqueta="Marca" nombre="marca" error={errores.marca}>
        <input
          id="marca"
          name="marca"
          type="text"
          value={form.marca}
          onChange={handleChange}
          className="campo-input"
        />
      </Campo>

      <Campo etiqueta="Tipo de producto" nombre="tipo" error={errores.tipo}>
        <select
          id="tipo"
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="campo-input"
        >
          <option value="">Selecciona un tipo</option>
          {tiposProducto.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Campo>

      <div className="grid gap-4 sm:grid-cols-2">
        <Campo etiqueta="Stock (unidades)" nombre="stock" error={errores.stock}>
          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={form.stock}
            onChange={handleChange}
            className="campo-input"
          />
        </Campo>

        <Campo etiqueta="Precio (CLP)" nombre="precio" error={errores.precio}>
          <input
            id="precio"
            name="precio"
            type="number"
            min="0"
            step="1"
            value={form.precio}
            onChange={handleChange}
            className="campo-input"
          />
        </Campo>
      </div>

      <div className="flex flex-wrap gap-3">
        <Boton type="submit">{textoBoton}</Boton>
        {cancelarA && (
          <Boton to={cancelarA} variante="secundario">
            Cancelar
          </Boton>
        )}
      </div>
    </form>
  );
}

export default FormularioProducto;