# Supermercado: Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React** y **React Router**. Permite navegar entre varias pantallas dentro del mismo frontend, sin recargar la página (Single Page Application).

Proyecto de la **Evaluación Formativa 1** (Experiencia 1, Semana 1) de la asignatura **Desarrollo Frontend II (PFY2202)**, Duoc UC.

## Tecnologías

- React
- React Router (`react-router-dom`)
- HTML, CSS y JavaScript
- Vite

## Páginas y rutas

| Página           | Ruta                | Descripción                                           |
| ---------------- | ------------------- | ----------------------------------------------------- |
| Inicio           | `/`                 | Tabla de inventario con stock, precio y estado.       |
| Quiénes somos    | `/quienes-somos`    | Presentación del supermercado, misión y visión.       |
| Nuestras tiendas | `/nuestras-tiendas` | Listado de sucursales con dirección y horario.        |
| No encontrada    | `*`                 | Página 404 para cualquier ruta que no exista.         |

La navegación se realiza con un **menú inferior** fijo, que resalta la página activa.

## Estructura del proyecto

```
├── index.html             # Punto de entrada HTML de Vite
├── vite.config.js         # Configuración de Vite
├── public/                # Archivos estáticos (favicon, manifest, logos)
└── src/
    ├── components/
    │   └── Navbar.jsx     # Menú inferior de navegación
    │   ├── FilaProducto.jsx     # Fila de la tabla de inventario
    │   └── TablaInventario.jsx  # Tabla de inventario
    │   ├── TarjetaTienda.jsx    # Tarjeta de una sucursal
    ├── data/
    │   ├── productos.js   # Datos de productos del inventario
    │   └── tiendas.js     # Datos de las sucursales
    ├── pages/
    │   ├── Home.jsx       # Página principal (inventario)
    │   ├── QuienesSomos.jsx
    │   ├── NuestrasTiendas.jsx
    │   └── NoEncontrada.jsx
    ├── utils/
    │   └── inventario.js  # Umbral de stock bajo y función auxiliar
    ├── App.jsx            # Configuración de rutas (React Router)
    ├── App.css            # Estilos de la aplicación
    ├── main.jsx           # Punto de entrada de React
    └── index.css
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