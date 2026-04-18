// =====================================================
// Card.jsx — Tarjeta reutilizable de proyecto
// =====================================================
// Props:
//   proyecto: { nombre, descripcion, tecnologias, emoji,
//               gradiente, urlCodigo, urlDemo, imagen? }
// =====================================================

export default function Card({ proyecto }) {
  const {
    nombre,
    descripcion,
    tecnologias,
    emoji,
    gradiente,
    urlCodigo,
    urlDemo,
    imagen, // opcional: ruta a una imagen real en src/activos/
  } = proyecto

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Imagen o placeholder */}
      {imagen ? (
        <img
          src={imagen}
          alt={nombre}
          className="w-full object-cover block"
          style={{ height: 200 }}
        />
      ) : (
        <div
          className="w-full flex items-center justify-center text-5xl"
          style={{ height: 200, background: gradiente }}
        >
          {emoji}
        </div>
      )}

      {/* Cuerpo de la tarjeta */}
      <div className="p-6">
        {/* Tecnologías */}
        <span className="project-tag">{tecnologias}</span>

        {/* Nombre */}
        <h3 className="font-display text-xl mb-2">{nombre}</h3>

        {/* Descripción */}
        <p
          className="text-sm leading-relaxed font-light mb-5"
          style={{ color: 'var(--c-muted)' }}
        >
          {descripcion}
        </p>

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={urlCodigo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm btn-sm-fill"
          >
            &lt;/&gt; Código
          </a>
          {urlDemo && urlDemo !== '#' ? (
            <a
              href={urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sm"
            >
              ▶ Demo
            </a>
          ) : (
            <span className="btn-sm opacity-40 cursor-not-allowed">▶ Demo</span>
          )}
        </div>
      </div>
    </div>
  )
}
