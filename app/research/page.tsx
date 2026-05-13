import Link from "next/link";

export default function Research() {
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
        
        {/* Columna Izquierda: Menú de Navegación Estricto */}
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

        {/* Columna Derecha: Research */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="font-bold mb-4 text-lg">CHARQUEMAL</h2>
            <p>
              CHARQUEMAL es una línea de investigación artística centrada en la materia como portadora de tiempo, memoria física y fuerzas invisibles. La práctica trabaja con sedimento, humedad, aire, tizne, vibración y procesos de transformación lenta mediante instalación, escultura, sonido y experimentación material.
            </p>
            <p className="mt-4">
              Desarrollada desde el litoral del Paraná, la investigación no utiliza el territorio como imagen o representación, sino como materia activa de trabajo. Arcillas, agua, residuos orgánicos, fenómenos atmosféricos y dinámicas de acumulación y desgaste participan directamente en la constitución física de las obras.
            </p>
            <p className="mt-4">
              Los proyectos funcionan como sistemas abiertos en distintas fases de investigación, prototipado y producción.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}