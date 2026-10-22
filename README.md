# Supermercado: Gestión de Inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React** y **React Router**. Permite navegar entre varias pantallas dentro del mismo frontend, sin recargar la página (Single Page Application).

Proyecto de la **Evaluación Formativa 1** (Experiencia 1, Semana 1) de la asignatura **Desarrollo Frontend II (PFY2202)**, Duoc UC.

## Tecnologías

- React
- React Router (`react-router-dom`)
- HTML, CSS y JavaScript
- Create React App

## Páginas y rutas

| Página           | Ruta                | Descripción                                           |
| ---------------- | ------------------- | ----------------------------------------------------- |
| Inicio           | `/`                 | Tabla de inventario con stock, precio y estado.       |
| Quiénes somos    | `/quienes-somos`    | Presentación del supermercado, misión y visión.       |
| Nuestras tiendas | `/nuestras-tiendas` | Listado de sucursales con dirección y horario.        |

La navegación se realiza con un **menú inferior** fijo, que resalta la página activa.

## Estructura del proyecto

```
src/
├── components/
│   └── Navbar.js          # Menú inferior de navegación
├── pages/
│   ├── Home.js            # Página principal (inventario)
│   ├── QuienesSomos.js
│   └── NuestrasTiendas.js
├── App.js                 # Configuración de rutas (React Router)
├── App.css                # Estilos de la aplicación
├── index.js
└── index.css
```

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- npm (se instala junto con Node.js)

## Instalación y ejecución

11. Clona el repositorio:

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
   npm start
```

5. Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

- `npm start`: inicia el servidor de desarrollo.
- `npm run build`: genera la versión optimizada para producción en la carpeta `build`.

## Autoría

Francisca Valenzuela, estudiante de Analista Programador Computacional, Duoc UC.