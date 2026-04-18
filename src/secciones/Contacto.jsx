// =====================================================
// Contacto.jsx — Sección de contacto
// === ACTUALIZA los href con tus datos reales ===
// =====================================================

const contactos = [
  {
    label: 'Correo',
    valor: 'cristofferjaramillo@gmail.com',
    href: 'mailto:cristofferjaramillo@gmail.com',
    emoji: '✉️',
    bg: '#fce8e6',
  },
  {
    label: 'GitHub',
    valor: 'Crisss09-eng',
    href: 'https://github.com/Crisss09-eng',
    emoji: '🐙',
    bg: '#f0f0f0',
  },
  {
    label: 'WhatsApp',
    valor: 'Escríbeme',
    // === CAMBIA: wa.me/57 + tu número sin espacios ===
    href: 'https://wa.me/573042734649',
    emoji: '💬',
    bg: '#e8f5e9',
  }
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="section-label">Contacto</p>
        <h2 className="section-title font-display">Trabajemos juntos</h2>
        <p className="section-desc">
          ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo?
          Escríbeme por cualquiera de estos canales.
        </p>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {contactos.map((item) => (
            <TarjetaContacto key={item.label} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

// Sub-componente: tarjeta de contacto
function TarjetaContacto({ label, valor, href, emoji, bg }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl no-underline transition-all duration-200"
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        padding: '1.1rem 1.25rem',
        color: 'var(--c-text)',
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
        className="flex items-center justify-center rounded-xl flex-shrink-0 text-xl"
        style={{ width: 42, height: 42, background: bg }}
      >
        {emoji}
      </div>
      <div>
        <div className="text-xs mb-0.5" style={{ color: 'var(--c-muted)', fontWeight: 400 }}>
          {label}
        </div>
        <div className="text-sm font-medium">{valor}</div>
      </div>
    </a>
  )
}
