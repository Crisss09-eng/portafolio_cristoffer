import { useState } from 'react'

// =====================================================
// Navbar.jsx — Barra de navegación fija
// =====================================================

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[60px]"
      style={{
        background: 'rgba(250,250,248,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      {/* Logo */}
      <a
        href="#inicio"
        className="font-display text-xl no-underline"
        style={{ color: 'var(--c-text)' }}
      >
        CJ.
      </a>

      {/* Links escritorio */}
      <ul className="hidden md:flex gap-8 list-none">
        {['proyectos', 'habilidades', 'contacto'].map((seccion) => (
          <li key={seccion}>
            <a
              href={`#${seccion}`}
              className="text-sm no-underline capitalize transition-colors duration-200"
              style={{ color: 'var(--c-muted)', fontWeight: 400, letterSpacing: '0.02em' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--c-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--c-muted)')}
            >
              {seccion}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contacto"
            className="text-xs font-medium no-underline px-4 py-1.5 rounded-full transition-all duration-200"
            style={{ background: 'var(--c-text)', color: 'var(--c-bg)' }}
            onMouseEnter={(e) => (e.target.style.background = 'var(--c-accent)')}
            onMouseLeave={(e) => (e.target.style.background = 'var(--c-text)')}
          >
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón hamburguesa móvil */}
      <button
        className="flex md:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        <span
          className="block w-[22px] h-[1.5px] transition-all duration-300"
          style={{
            background: 'var(--c-text)',
            transform: menuAbierto ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }}
        />
        <span
          className="block w-[22px] h-[1.5px] transition-all duration-300"
          style={{
            background: 'var(--c-text)',
            opacity: menuAbierto ? 0 : 1,
          }}
        />
        <span
          className="block w-[22px] h-[1.5px] transition-all duration-300"
          style={{
            background: 'var(--c-text)',
            transform: menuAbierto ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }}
        />
      </button>

      {/* Menú desplegable móvil */}
      {menuAbierto && (
        <div
          className="absolute top-[60px] left-0 right-0 flex flex-col gap-4 px-8 py-5 md:hidden"
          style={{
            background: 'var(--c-surface)',
            borderBottom: '1px solid var(--c-border)',
          }}
        >
          {['proyectos', 'habilidades', 'contacto'].map((seccion) => (
            <a
              key={seccion}
              href={`#${seccion}`}
              onClick={cerrarMenu}
              className="text-sm capitalize no-underline"
              style={{ color: 'var(--c-muted)' }}
            >
              {seccion}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
