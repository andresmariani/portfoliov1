import Link from "next/link";

export default function Audiovisual() {
  return (
    <div className="p-8 md:p-12 text-black bg-[#f8f8f8] min-h-screen">
      
      {/* Header */}
      <header className="mb-12 border-b border-black pb-4">
        <h1 className="text-2xl font-bold mb-2">Andrés Mariani Bergoen</h1>
        <p className="text-sm italic">Artista visual e investigador material. Santa Fe, Argentina.</p>
        <p className="text-xs mt-2 text-gray-600">Fundado 2026</p>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Columna Izquierda: Menú */}
        <nav className="w-full md:w-48 shrink-0">
          <ul className="space-y-3 text-sm underline decoration-1 underline-offset-2">
            <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
            <li><Link href="/statement" className="hover:text-gray-600">Statement</Link></li>
            <li><Link href="/works" className="hover:text-gray-600">Works / Obras</Link></li>
            <li><Link href="/research" className="hover:text-gray-600">Research / Investigación</Link></li>
            <li><Link href="/audiovisual" className="hover:text-gray-600">Audiovisual Archive</Link></li>
            <li><Link href="/cv" className="hover:text-gray-600">Curriculum Vitae</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">Contact / Inquiries</Link></li>
          </ul>
        </nav>

        {/* Columna Derecha: Audiovisual */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-12">
          
          <section>
            <p className="italic mb-8">Selección de proyectos audiovisuales y de animación desarrollados entre 2015 y la actualidad.</p>
          </section>

          <section className="space-y-12">
            
            {/* FUEGUINOS */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-4">FUEGUINOS</h2>
              <p className="mb-6">Cortometraje de animación stop motion actualmente en producción. Proyecto apoyado por Espacio Santafesino y Fondo Nacional de las Artes.</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p>Formato: Cortometraje stop motion</p>
                <p>Rol: Guion</p>
                <p>Estado: En producción</p>
              </div>
            </article>

            {/* PARANOICUS */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-4">PARANOICUS</h2>
              <p className="mb-6">Cortometraje de animación stop motion presentado en festivales nacionales e internacionales.</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p>Año: 2015</p>
                <p>Rol: Guion y Dirección de Fotografía</p>
              </div>
            </article>

            {/* DERECHO VIEJO */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-4">DERECHO VIEJO</h2>
              <p className="mb-6">Miniserie dirigida por Pablo Giorgelli para la Televisión Pública Argentina.</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p>Año: 2019</p>
                <p>Rol: Asistente de Arte</p>
              </div>
            </article>

          </section>
        </main>
      </div>
    </div>
  );
}