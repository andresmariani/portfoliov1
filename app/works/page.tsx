import Link from "next/link";
import Image from "next/image";

export default function Works() {
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

        {/* Columna Derecha: Works Index */}
        <main className="flex-1 max-w-4xl text-sm leading-relaxed space-y-12">
          
          <section>
            <p className="italic mb-8">Selección de proyectos e investigaciones recientes.</p>
          </section>

          <section className="space-y-16">
            
            {/* FUGA NOIR */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/fuga-noir" className="underline hover:text-gray-600">FUGA NOIR</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/Fuga_Noir.png" alt="FUGA NOIR" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">FUGA NOIR investiga relaciones entre pérdida, vibración y persistencia mediante un dispositivo escultórico e hidráulico construido con sedimentos, humedad y circulación lenta de fluidos oscuros.</p>
                  <p className="mb-4">La obra funciona como un sistema de exudación continua: una estructura material libera lentamente un fluido mientras traduce ese proceso en vibración sonora de baja frecuencia perceptible en el cuerpo del espectador.</p>
                  <p className="mb-6">Desarrollada dentro de CHARQUEMAL, la pieza propone una relación física con procesos mínimos de desgaste, filtración y transformación lenta.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2026–presente</p>
                    <p>Estado: Investigación y prototipado</p>
                    <p>Formato: Instalación escultórica y sonora</p>
                    <p>Materiales: Sedimentos, arcillas, fluidos, sistema hidráulico, sonido</p>
                    <p>Territorio: Litoral del Paraná / Río Arga</p>
                  </div>
                </div>
              </div>
            </article>

            {/* CEDENCIA PLEURO */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/cedencia-pleuro" className="underline hover:text-gray-600">CEDENCIA PLEURO</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/CEDENCIA_PLEURO.png" alt="CEDENCIA PLEURO" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">CEDENCIA PLEURO explora relaciones entre espuma fluvial, química de superficie y comportamiento micelial mediante una investigación situada en el litoral del Paraná.</p>
                  <p className="mb-4">El proyecto parte de la observación de la espuma generada por el río en zonas de turbulencia y propone investigar posibles vínculos formales y materiales con sistemas miceliales capaces de modificar la relación entre agua y aire mediante proteínas tensioactivas.</p>
                  <p className="mb-6">La investigación se desarrolla como un proceso abierto entre práctica artística, micología y saberes territoriales del río.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2026–presente</p>
                    <p>Estado: Investigación en desarrollo</p>
                    <p>Formato: Investigación material e instalación experimental</p>
                    <p>Materiales: Micelio, agua del Paraná, fibras agrícolas, registro audiovisual</p>
                    <p>Territorio: Cuenca del Plata / Litoral santafesino</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TRAZA CRONO */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/traza-crono" className="underline hover:text-gray-600">TRAZA CRONO</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/Traza_Crono.png" alt="TRAZA CRONO" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">TRAZA CRONO investiga inscripción temporal y sedimentación material mediante superficies capaces de registrar desplazamientos, presión, erosión y permanencia.</p>
                  <p className="mb-6">La obra trabaja sobre la posibilidad de que la materia funcione simultáneamente como archivo físico y como proceso activo de transformación continua.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2026–presente</p>
                    <p>Estado: Conceptualización y visualización</p>
                    <p>Formato: Instalación escultórica</p>
                    <p>Materiales: Sedimentos, superficies minerales, registro físico</p>
                    <p>Territorio: Litoral del Paraná</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TIZNE PRIMAL */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/tizne-primal" className="underline hover:text-gray-600">TIZNE PRIMAL</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/Tizne_Primal.png" alt="TIZNE PRIMAL" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">TIZNE PRIMAL explora relaciones entre combustión, residuo y oscuridad como formas materiales de inscripción.</p>
                  <p className="mb-6">La obra trabaja con tizne y deposición atmosférica para producir superficies donde la acumulación lenta transforma la percepción del espacio y la materia.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2026–presente</p>
                    <p>Estado: Investigación y visualización</p>
                    <p>Formato: Instalación material</p>
                    <p>Materiales: Tizne, superficies minerales, residuos de combustión</p>
                    <p>Territorio: Litoral santafesino</p>
                  </div>
                </div>
              </div>
            </article>

            {/* PERSISTEM */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/persistem" className="underline hover:text-gray-600">PERSISTEM</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/PERSISTEM.png" alt="PERSISTEM" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">PERSISTEM investiga formas de permanencia residual y comportamiento material en sistemas sometidos a desgaste lento.</p>
                  <p className="mb-6">La pieza propone estructuras donde acumulación, vibración y erosión funcionan simultáneamente como construcción y pérdida.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2026–presente</p>
                    <p>Estado: Investigación conceptual</p>
                    <p>Formato: Instalación escultórica</p>
                    <p>Materiales: Sedimentos, estructuras resonantes, sistemas de tensión</p>
                    <p>Territorio: Litoral del Paraná</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TRAMAS INESTABLES */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/tramas-inestables" className="underline hover:text-gray-600">TRAMAS INESTABLES</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image src="/images/TRAMAS_INESTABLES.png" alt="TRAMAS INESTABLES" fill className="object-cover border border-gray-300" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-2">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-4">TRAMAS INESTABLES es una instalación audiovisual que articula inteligencia artificial generativa, síntesis de video y superficies textiles artesanales.</p>
                  <p className="mb-6">El proyecto explora relaciones entre imagen algorítmica, degradación digital y materialidad orgánica mediante proyecciones procesadas sobre estructuras de fieltro realizadas manualmente.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2025</p>
                    <p>Estado: Proyecto presentado</p>
                    <p>Formato: Instalación audiovisual</p>
                    <p>Materiales: IA generativa, Hydra Video Synth, fieltro artesanal, proyección</p>
                  </div>
                </div>
              </div>
            </article>

          </section>
        </main>
      </div>
    </div>
  );
}
