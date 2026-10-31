# Supermercado: Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React**, **React Router**, **Context API** y **Tailwind CSS**. Permite navegar entre varias pantallas sin recargar la página (Single Page Application), ver el inventario y agregar nuevos artículos mediante un formulario.

Proyecto de la **Evaluación Formativa 2** (Experiencia 1, Semana 2) de la asignatura **Desarrollo Frontend II (PFY2202)**, Duoc UC. Es la continuación de la Evaluación Formativa 1 (Semana 1).

## Tecnologías

- React
- React Router (`react-router-dom`)
- Context API de React (estado global del inventario)
- Tailwind CSS (framework CSS, integrado con el plugin `@tailwindcss/vite`)
- HTML y JavaScript
- Vite

## Funcionalidades

- Menú de navegación superior fijo, que resalta la página activa.
- Estado global del inventario con Context API: cada artículo tiene nombre, marca, tipo de producto, stock y precio.
- Formulario para agregar nuevos artículos, con validación de campos.
- Tabla que lista todos los artículos del inventario, con indicador de stock bajo.
- Portada con resumen del inventario (total de artículos y cantidad con stock bajo).

> **Nota:** el estado global se mantiene en memoria. Los artículos agregados se pierden al recargar la página.

## Páginas y rutas

| Página           | Ruta                | Descripción                                                     |
| ---------------- | ------------------- | --------------------------------------------------------------- |
| Inicio           | `/`                 | Bienvenida y resumen del inventario.                            |
| Inventario       | `/inventario`       | Tabla con todos los artículos: nombre, marca, tipo, stock, precio y estado. |
| Agregar artículo | `/agregar`          | Formulario para ingresar un nuevo artículo al inventario.       |
| Quiénes somos    | `/quienes-somos`    | Presentación, misión, visión, valores, categorías y contacto.   |
| Nuestras tiendas | `/nuestras-tiendas` | Sucursales con mapa, dirección, horario, teléfono y correo.     |
| No encontrada    | `*`                 | Página 404 para cualquier ruta que no exista.                   |

## Estructura del proyecto

```
├── index.html             # Punto de entrada HTML de Vite
├── vite.config.js         # Configuración de Vite (React + Tailwind)
├── public/                # Archivos estáticos (favicon, manifest, logos, imágenes)
└── src/
    ├── components/
    │   ├── FilaProducto.jsx     # Fila de la tabla de inventario
    │   ├── Footer.jsx           # Pie de página
    │   ├── Layout.jsx           # Estructura común (menú, contenido y footer)
    │   ├── Navbar.jsx           # Menú superior de navegación
    │   ├── TablaInventario.jsx  # Tabla de inventario
    │   └── TarjetaTienda.jsx    # Tarjeta de una sucursal
    ├── context/
    │   └── InventarioContext.jsx  # Estado global: lista de artículos y agregarProducto
    ├── data/
    │   ├── productos.js   # Artículos iniciales y tipos de producto
    │   ├── tiendas.js     # Datos de las sucursales
    │   └── valores.js     # Valores del supermercado
    ├── pages/
    │   ├── Home.jsx             # Portada con resumen
    │   ├── Inventario.jsx       # Listado de artículos
    │   ├── AgregarArticulo.jsx  # Formulario de ingreso de artículos
    │   ├── QuienesSomos.jsx
    │   ├── NuestrasTiendas.jsx
    │   └── NoEncontrada.jsx
    ├── utils/
    │   └── inventario.js  # Umbral de stock bajo y función auxiliar
    ├── App.jsx            # Proveedor de estado y rutas (React Router)
    ├── main.jsx           # Punto de entrada de React
    └── index.css          # Importa Tailwind CSS
```

## Requisitos previos

- [Node.js](https://nodejs.org/) versión 20.19 o superior (o 22.12+), requerida por Vite
- npm (se instala junto con Node.js)

## Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/Francisca-Valenzuela/supermercado-francisca-valenzuela-PFY2202.git
```

2. Entra a la carpeta del proyecto:

```bash
cd supermercado-francisca-valenzuela-PFY2202
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el proyecto:

```bash
npm run dev
```

5. Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la versión optimizada para producción en la carpeta `dist`.
- `npm run preview`: sirve localmente la versión de producción generada con `build`.

## Autoría

Francisca Valenzuela, estudiante de Analista Programador Computacional, Duoc UC.