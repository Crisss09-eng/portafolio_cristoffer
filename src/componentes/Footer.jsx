// =====================================================
// Footer.jsx — Pie de página
// =====================================================

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer
      className="text-center py-8 text-sm font-light"
      style={{
        borderTop: '1px solid var(--c-border)',
        color: 'var(--c-muted)',
      }}
    >
      <p>
        Diseñado y desarrollado por{' '}
        <strong style={{ color: 'var(--c-text)', fontWeight: 500 }}>
          Cristoffer Jaramillo
        </strong>{' '}
        · {anio}
      </p>
      <p className="mt-1 text-xs">Hecho con React + Tailwind CSS</p>
    </footer>
  )
}
