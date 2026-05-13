import Link from "next/link";

export default function CV() {
  return (
    <div className="p-8 md:p-12 text-black bg-[#f8f8f8] min-h-screen">
      
      {/* Header */}
      <header className="mb-12 border-b border-black pb-4">
        <h1 className="text-2xl font-bold mb-2">Andrés Mariani Bergoen</h1>
        <p className="text-sm italic">Artista visual e investigador material. Santa Fe, Argentina.</p>
        <p className="text-xs mt-2 text-gray-600">31°38′S 60°42′W</p>
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
            <li><Link href="/cv" className="hover:text-gray-600">Curriculum Vitae</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">Contact / Inquiries</Link></li>
          </ul>
        </nav>

        {/* Columna Derecha: CV */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-12">
          
          <section>
            <h2 className="font-bold uppercase text-xs mb-4">Bio</h2>
            <p>
              Artista visual e investigador material cuya práctica se sitúa en el cruce entre instalación, escultura, sonido y experimentación audiovisual. Su investigación reciente se desarrolla bajo el marco de CHARQUEMAL, una línea de trabajo centrada en sedimento, humedad, vibración y procesos de transformación lenta desde el litoral del Paraná.
            </p>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">Formación</h2>
            <ul className="space-y-4">
              <li>
                <p>Diplomatura en Inteligencia Artificial Aplicada al Arte Multimedial</p>
                <p className="text-xs text-gray-600">Universidad Nacional de las Artes</p>
              </li>
              <li>
                <p>Técnico Superior en Artes Audiovisuales</p>
                <p className="text-xs text-gray-600">Instituto Superior de Cine y Artes Audiovisuales N°10, Santa Fe</p>
              </li>
              <li>
                <p>Licenciatura en Artes y Tecnologías</p>
                <p className="text-xs text-gray-600">Universidad Nacional de Quilmes (en curso)</p>
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">Proyectos e Investigación</h2>
            <ul className="space-y-6">
              <li>
                <p className="font-bold">CHARQUEMAL — Investigación artística en desarrollo (2025–presente)</p>
                <p className="text-xs text-gray-600 mt-1">FUGA NOIR / CEDENCIA PLEURO / TRAZA CRONO / TIZNE PRIMAL / PERSISTEM</p>
              </li>
              <li>
                <p className="font-bold">TRAMAS INESTABLES (2025)</p>
                <p className="text-xs text-gray-600 mt-1">Proyecto de instalación audiovisual. Participación en jornada de pitch en Fundación Andreani.</p>
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">Audiovisual Seleccionado</h2>
            <ul className="space-y-6">
              <li>
                <p className="font-bold">FUEGUINOS — Cortometraje stop motion en producción</p>
                <p className="text-xs text-gray-600 mt-1">Apoyos: Espacio Santafesino (2020) y Fondo Nacional de las Artes (2022)</p>
              </li>
              <li>
                <p className="font-bold">PARANOICUS (2015)</p>
                <p className="text-xs text-gray-600 mt-1">Cortometraje de animación stop motion</p>
              </li>
              <li>
                <p className="font-bold">DERECHO VIEJO (2019)</p>
                <p className="text-xs text-gray-600 mt-1">Asistente de Arte — Televisión Pública Argentina</p>
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">Distinciones</h2>
            <p>Segundo puesto internacional — Youth Video Competition S4D Korea (2023), Second Summit for Democracy, Seúl, Corea del Sur.</p>
          </section>

        </main>
      </div>
    </div>
  );
}