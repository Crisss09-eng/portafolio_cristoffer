import { useEffect, useState } from 'react'
import Card from '../componentes/Card'
import { obtenerProyectos } from '../servicios/api'

// =====================================================
// Proyectos.jsx — Sección de proyectos
// Los datos vienen de src/servicios/api.js
// (JSON local o API REST según configures)
// =====================================================

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    obtenerProyectos()
      .then((data) => {
        setProyectos(data)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <section id="proyectos" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="section-label">Portafolio</p>
        <h2 className="section-title font-display">Mis proyectos</h2>
        <p className="section-desc">
          Una selección de trabajos donde apliqué mis habilidades técnicas para
          resolver problemas reales. Puedes ver el código fuente o explorar la demo.
        </p>

        {/* Estado de carga */}
        {cargando && (
          <div className="flex gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-2xl animate-pulse flex-1"
                style={{ height: 360, background: 'var(--c-border)' }}
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-sm" style={{ color: 'var(--c-muted)' }}>
            No se pudieron cargar los proyectos: {error}
          </p>
        )}

        {/* Grid de tarjetas */}
        {!cargando && !error && (
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {proyectos.map((proyecto) => (
              <Card key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
