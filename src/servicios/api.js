// =====================================================
// api.js — Servicio de datos
// =====================================================
// Aquí puedes cambiar entre dos modos:
//   1. JSON local (por defecto) — usa src/data/proyectos.json
//   2. API REST externa — descomenta la función fetchDesdeAPI
//      y reemplaza la URL con la de tu backend en Node.js
// =====================================================

import proyectosLocal from '../data/proyectos.json'

// -----------------------------------------------------
// MODO 1: JSON local (activo por defecto)
// -----------------------------------------------------
export async function obtenerProyectos() {
  // Simula un pequeño delay como si fuera una petición real
  return new Promise((resolve) => {
    setTimeout(() => resolve(proyectosLocal), 100)
  })
}

// -----------------------------------------------------
// MODO 2: API REST con Node.js
// Para activar: comenta la función de arriba y
// descomenta la de abajo. Cambia la URL a tu servidor.
// -----------------------------------------------------
// export async function obtenerProyectos() {
//   const respuesta = await fetch('http://localhost:3001/api/proyectos')
//   if (!respuesta.ok) throw new Error('Error al cargar proyectos')
//   return respuesta.json()
// }
