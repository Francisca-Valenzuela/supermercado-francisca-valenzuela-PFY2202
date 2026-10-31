import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import { tiposProducto } from '../data/productos';

const FORM_INICIAL = { nombre: '', marca: '', tipo: '', stock: '', precio: '' };

const inputClase =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-2 focus:outline-green-700';

function Campo({ etiqueta, nombre, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={nombre} className="font-semibold text-green-800">
        {etiqueta}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
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

function AgregarArticulo() {
  const { agregarProducto } = useInventario();
  const navigate = useNavigate();
  const [form, setForm] = useState(FORM_INICIAL);
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

    agregarProducto({
      nombre: form.nombre.trim(),
      marca: form.marca.trim(),
      tipo: form.tipo,
      stock: Number(form.stock),
      precio: Number(form.precio),
    });

    navigate('/inventario');
  };

  return (
    <section>
      <h1 className="text-3xl font-bold text-green-900 mb-2">Agregar artículo</h1>
      <p>Completa los datos para ingresar un nuevo artículo al inventario.</p>

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
            className={inputClase}
          />
        </Campo>

        <Campo etiqueta="Marca" nombre="marca" error={errores.marca}>
          <input
            id="marca"
            name="marca"
            type="text"
            value={form.marca}
            onChange={handleChange}
            className={inputClase}
          />
        </Campo>

        <Campo etiqueta="Tipo de producto" nombre="tipo" error={errores.tipo}>
          <select
            id="tipo"
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className={inputClase}
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
              className={inputClase}
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
              className={inputClase}
            />
          </Campo>
        </div>

        <button
          type="submit"
          className="self-start min-h-11 px-5 rounded-lg font-semibold bg-green-900 text-white hover:bg-green-800"
        >
          Agregar al inventario
        </button>
      </form>
    </section>
  );
}

export default AgregarArticulo;