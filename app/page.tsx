"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 md:p-12 text-black bg-[#f8f8f8] min-h-screen">
      
      {/* Header - Estilo UbuWeb (Crudo y directo) */}
      <header className="mb-12 border-b border-black pb-4">
        <h1 className="text-2xl font-bold mb-2">Andrés Mariani Bergoen</h1>
        <p className="text-sm italic">Artista visual e investigador material. Santa Fe, Argentina.</p>
        <p className="text-xs mt-2 text-gray-600">Fundado 2026</p>
      </header>

      {/* Main Content Layout - Dos columnas asimétricas */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Columna Izquierda: Menú de Navegación Estricto */}
        <nav className="w-full md:w-48 shrink-0">
          <ul className="space-y-3 text-sm underline decoration-1 underline-offset-2">
            <li><Link href="/statement" className="hover:text-gray-600">Statement</Link></li>
            <li><Link href="/works" className="hover:text-gray-600">Works / Obras</Link></li>
            <li><Link href="/research" className="hover:text-gray-600">Research / Investigación</Link></li>
            <li><Link href="/audiovisual" className="hover:text-gray-600">Audiovisual Archive</Link></li>
            <li><Link href="/cv" className="hover:text-gray-600">Curriculum Vitae</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">Contact / Inquiries</Link></li>
          </ul>
        </nav>

        {/* Columna Derecha: Contenido Principal (Biografía pura) */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-6">
          <section>
            <p>
              Andrés Mariani Bergoen es artista visual e investigador material radicado en Santa Fe, Argentina. Su práctica se sitúa en el cruce entre instalación, escultura, sonido y experimentación audiovisual, con un anclaje territorial específico en el litoral del Paraná.
            </p>
          </section>
        </main>
      </div>

    </div>
  );
}