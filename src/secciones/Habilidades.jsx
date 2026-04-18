// =====================================================
// Habilidades.jsx — Sección de tecnologías
// Agrega o quita chips según tus conocimientos reales
// =====================================================

// === EDITA ESTOS GRUPOS para personalizar tus skills ===
const grupos = [
  {
    titulo: 'Frontend',
    chips: ['HTML5', 'CSS3', 'JavaScript'],
    // Agrega más: 'React', 'Vue', 'Tailwind CSS', etc.
  },
  {
    titulo: 'Backend',
    chips: ['PHP', 'Laravel'],
    // Agrega más: 'Node.js', 'Express', etc.
  },
  {
    titulo: 'Base de datos',
    chips: ['MySQL', 'SQL'],
    // Agrega más: 'PostgreSQL', 'MongoDB', etc.
  },
  {
    titulo: 'Herramientas',
    chips: ['Git', 'GitHub', 'VS Code'],
    // Agrega más: 'Docker', 'Postman', etc.
  },
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">

        <p className="section-label">Tecnologías</p>
        <h2 className="section-title font-display">Habilidades técnicas</h2>
        <p className="section-desc">
          Tecnologías y herramientas con las que trabajo en el desarrollo de
          aplicaciones web.
        </p>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {grupos.map((grupo) => (
            <GrupoSkill key={grupo.titulo} titulo={grupo.titulo} chips={grupo.chips} />
          ))}
        </div>

      </div>
    </section>
  )
}

// Sub-componente: grupo de habilidades
function GrupoSkill({ titulo, chips }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
      }}
    >
      <h3
        className="text-xs font-medium uppercase tracking-widest mb-3"
        style={{ color: 'var(--c-muted)' }}
      >
        {titulo}
      </h3>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="skill-chip">{chip}</span>
        ))}
      </div>
    </div>
  )
}
