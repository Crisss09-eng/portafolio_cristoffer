// =====================================================
// Hero.jsx — Sección de presentación principal
// =====================================================

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: '80px 2rem 2rem' }}
    >
      {/* Círculos decorativos de fondo */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: -150,
          right: -150,
          background: 'var(--c-accent-light)',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 250,
          height: 250,
          bottom: 80,
          left: -80,
          background: 'var(--c-accent-light)',
          opacity: 0.35,
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto w-full">

        {/* Etiqueta de disponibilidad */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-6"
          style={{
            background: 'var(--c-accent-light)',
            color: 'var(--c-accent)',
            letterSpacing: '0.04em',
          }}
        >
          <span
            className="rounded-full"
            style={{ width: 6, height: 6, background: 'var(--c-accent)', display: 'inline-block' }}
          />
          {/* === CAMBIA ESTE TEXTO si no estás disponible === */}
          Disponible para proyectos
        </div>

        {/* Título principal */}
        <h1
          className="font-display mb-6 leading-none"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}
        >
          Hola, soy<br />
          <em style={{ fontStyle: 'italic', color: 'var(--c-accent)' }}>Cristoffer</em><br />
          Jaramillo.
        </h1>

        {/* === CAMBIA ESTA DESCRIPCIÓN === */}
        <p
          className="text-lg leading-relaxed font-light mb-10"
          style={{ color: 'var(--c-muted)', maxWidth: 520 }}
        >
          Desarrollador web apasionado por construir soluciones digitales limpias
          y funcionales. Trabajo con tecnologías web modernas para transformar ideas
          en productos reales.
        </p>

        {/* Botones de acción */}
        <div className="flex gap-4 flex-wrap mb-16">
          <a href="#proyectos" className="btn-primary">Ver proyectos</a>
          <a href="#contacto" className="btn-outline">Contactarme</a>
        </div>

        {/* Slide cards de acceso rápido */}
        <div className="flex gap-4 flex-wrap">

          <SlideCard href="#habilidades" emoji="⚡" label="Stack principal" valor="Laravel & JS" />
          {/* === ACTUALIZA el número de proyectos === */}
          <SlideCard href="#proyectos" emoji="🗂" label="Proyectos" valor="2 realizados" />
          <SlideCard href="https://github.com/Crisss09-eng" emoji="🐙" label="GitHub" valor="Crisss09-eng" externo />

        </div>
      </div>
    </section>
  )
}

// Sub-componente interno: tarjeta de acceso rápido
function SlideCard({ href, emoji, label, valor, externo = false }) {
  return (
    <a
      href={href}
      target={externo ? '_blank' : undefined}
      rel={externo ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 rounded-2xl no-underline transition-all duration-200"
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        padding: '1rem 1.25rem',
        color: 'var(--c-text)',
        minWidth: 160,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--c-accent)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,106,79,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--c-border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        className="flex items-center justify-center rounded-xl flex-shrink-0 text-lg"
        style={{ width: 36, height: 36, background: 'var(--c-accent-light)' }}
      >
        {emoji}
      </div>
      <div>
        <div className="text-xs mb-0.5" style={{ color: 'var(--c-muted)' }}>{label}</div>
        <div className="text-sm font-medium">{valor}</div>
      </div>
    </a>
  )
}
