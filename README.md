# Portafolio — Cristoffer Jaramillo

Portafolio personal construido con **React + Tailwind CSS + Vite**.

## Estructura del proyecto

```
portafolio/
├── publico/
│   └── index.html
├── src/
│   ├── activos/           # imágenes, logos, etc.
│   ├── componentes/       # componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Card.jsx
│   │   └── Footer.jsx
│   ├── secciones/         # secciones grandes
│   │   ├── Presentacion.jsx
│   │   ├── Proyectos.jsx
│   │   ├── Habilidades.jsx
│   │   └── Contacto.jsx
│   ├── servicios/
│   │   └── api.js         # consumo de datos (fetch o JSON)
│   ├── data/
│   │   └── proyectos.json # datos de proyectos
│   ├── App.jsx
│   ├── principal.jsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── vite.config.js
```

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Personalización rápida

### Cambiar tus datos personales
- **Nombre / descripción**: `src/componentes/Hero.jsx`
- **Proyectos**: `src/data/proyectos.json`
- **Habilidades**: `src/secciones/Habilidades.jsx` → array `grupos`
- **Contacto** (WhatsApp / LinkedIn): `src/secciones/Contacto.jsx` → array `contactos`

### Agregar una imagen real a un proyecto
En `src/data/proyectos.json`, agrega el campo `"imagen"` con la ruta:
```json
{
  "imagen": "/src/activos/mi-proyecto.png"
}
```
Si no hay `imagen`, se muestra el emoji con el gradiente.

### Agregar más proyectos
Agrega un objeto nuevo en `src/data/proyectos.json` siguiendo el mismo formato.

### Usar API REST en lugar de JSON local
Edita `src/servicios/api.js`: comenta la función del modo 1 y descomenta el modo 2 con tu URL.

## Build para producción

```bash
npm run build
```
Los archivos de producción quedan en la carpeta `dist/`.
