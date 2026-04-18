// =====================================================
// App.jsx — Componente raíz donde se unen todas las
//            secciones y componentes del portafolio
// =====================================================

import Navbar      from './componentes/Navbar'
import Footer      from './componentes/Footer'
import Presentacion from './secciones/Presentacion'
import Proyectos   from './secciones/Proyectos'
import Habilidades from './secciones/Habilidades'
import Contacto    from './secciones/Contacto'

export default function App() {
  return (
    <>
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Sección principal de presentación */}
      <Presentacion />

      <div className="divider" />

      {/* Proyectos */}
      <Proyectos />

      <div className="divider" />

      {/* Habilidades técnicas */}
      <Habilidades />

      <div className="divider" />

      {/* Contacto */}
      <Contacto />

      {/* Pie de página */}
      <Footer />
    </>
  )
}
