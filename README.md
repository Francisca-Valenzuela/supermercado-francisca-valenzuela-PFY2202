# Supermercado: Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React**, **React Router**, **Context API + useReducer** y **Tailwind CSS**. Permite listar, filtrar, ver el detalle, modificar, eliminar y agregar artículos, todo como Single Page Application.

Proyecto de la **Evaluación Sumativa 3** (Experiencia 1, Semana 3) de la asignatura **Desarrollo Frontend II (PFY2202)**, Duoc UC.

🌐 **Sitio publicado:** https://francisca-valenzuela.github.io/supermercado-francisca-valenzuela-PFY2202/

## Tecnologías

- React 19 (lazy loading con `React.lazy` y `Suspense`)
- React Router (`HashRouter`, rutas anidadas y parámetros dinámicos)
- Context API + `useReducer` (estado global del inventario)
- Tailwind CSS (plugin `@tailwindcss/vite`, `@apply` y diseño responsive)
- Vite y gh-pages

## Funcionalidades

- **Listado:** tabla con nombre, marca, tipo, stock, precio y estado de cada artículo.
- **Filtro dinámico:** por nombre/marca, tipo de producto y estado del stock. Se calcula sobre una copia, sin alterar el inventario original.
- **Detalle:** página `/inventario/:id` con toda la información del artículo y su valor total en inventario.
- **Modificación:** sumar/restar stock (±1, ±10), editar todos los datos del artículo y eliminarlo; los cambios se reflejan en todo el sitio.
- **Agregar artículo:** formulario con validación (reutiliza el mismo formulario de edición).
- Estados de stock: Disponible, Stock bajo (< 20 unidades) y Agotado.

> **Nota:** el estado se mantiene en memoria. Los cambios se pierden al recargar la página.

## Páginas y rutas

| Página            | Ruta                    | Descripción                                          |
| ----------------- | ----------------------- | ---------------------------------------------------- |
| Inicio            | `/`                     | Bienvenida y resumen del inventario.                 |
| Inventario        | `/inventario`           | Listado con filtros.                                 |
| Detalle           | `/inventario/:id`       | Detalle del artículo, ajuste de stock y eliminación. |
| Editar artículo   | `/inventario/:id/editar`| Formulario de edición.                               |
| Agregar artículo  | `/agregar`              | Formulario de ingreso.                               |
| Quiénes somos     | `/quienes-somos`        | Misión, visión, valores y contacto.                  |
| Nuestras tiendas  | `/nuestras-tiendas`     | Sucursales con mapa y datos de contacto.             |
| No encontrada     | `*`                     | Página 404.                                          |

Se usa `HashRouter`, por lo que en el sitio publicado las URL llevan `#` (ej. `/#/inventario`).

## Estructura del proyecto

```
├── index.html
├── vite.config.js            # Vite (React + Tailwind) y base de GitHub Pages
├── public/                   # Archivos estáticos
└── src/
    ├── components/
    │   ├── Boton.jsx               # Botón/enlace reutilizable con variantes
    │   ├── Campo.jsx               # Etiqueta + control + mensaje de error
    │   ├── ControlStock.jsx        # Botones para sumar/restar stock
    │   ├── EstadoStock.jsx         # Indicador de estado del stock
    │   ├── FilaProducto.jsx
    │   ├── FiltroInventario.jsx    # Filtros del listado
    │   ├── Footer.jsx
    │   ├── FormularioProducto.jsx  # Formulario de agregar/editar
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── ProductoNoEncontrado.jsx
    │   ├── TablaInventario.jsx
    │   └── TarjetaTienda.jsx
    ├── context/InventarioContext.jsx  # Reducer y funciones del inventario
    ├── data/                     # Datos iniciales
    ├── pages/                    # Una página por ruta
    ├── routes/AppRoutes.jsx      # Rutas centralizadas con lazy loading
    ├── utils/inventario.js       # Filtrado, estados de stock y formato de precios
    ├── App.jsx
    ├── main.jsx
    └── index.css                 # Tailwind y clases reutilizables con @apply
```

## Instalación y ejecución

```bash
git clone https://github.com/Francisca-Valenzuela/supermercado-francisca-valenzuela-PFY2202.git
cd supermercado-francisca-valenzuela-PFY2202
npm install
npm run dev
```

Abre http://localhost:5173. Requiere Node.js 20.19+ (o 22.12+).

## Scripts

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción en `dist`.
- `npm run preview`: sirve localmente el build.
- `npm run deploy`: construye y publica `dist` en la rama `gh-pages`.

## Publicación en GitHub Pages

1. `npm run deploy`
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → rama `gh-pages` / carpeta `/ (root)`**.

## Autoría

Francisca Valenzuela, estudiante de Analista Programador Computacional, Duoc UC.