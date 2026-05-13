import Link from "next/link";
import Image from "next/image";

export default function Works() {
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Fuga_Noir.png" alt="FUGA NOIR" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">FUGA NOIR es un dispositivo escultórico construido con arcillas, sedimentos y agua del litoral del Paraná. La pieza exuda lentamente un fluido oscuro desde un único punto de fuga mientras un sistema de micrófonos piezoeléctricos captura la vibración interna producida por la caída de las gotas y la traduce en bajas frecuencias perceptibles en el cuerpo del espectador. La obra funciona como un sistema activo de pérdida irreversible: algo abandona continuamente el cuerpo escultórico y esa sustracción se vuelve visible, sonora y física al mismo tiempo.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2024–2025</p>
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Cedencia_Pleuro_2.png" alt="CEDENCIA PLEURO" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">CEDENCIA PLEURO es una instalación viva desarrollada a partir de micelio activo de Pleurotus ostreatus y agua del Paraná. La obra investiga relaciones entre espuma fluvial, tensión superficial y comportamiento intersticial mediante un sistema donde el agua queda retenida dentro de una red micelial en fase vegetativa. La presencia del espectador altera esa geometría y desencadena la aparición y el colapso de espuma sobre la superficie de la pieza. El proyecto se desarrolla en consulta con especialistas en micología y materiales del litoral santafesino.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: En desarrollo, 2025</p>
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Traza_Crono_2.png" alt="TRAZA CRONO" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">TRAZA CRONO es una retícula mural de filtros HEPA y fibra de vidrio que acumulan nueve meses de aire del litoral santafesino durante la temporada migratoria de la golondrina parda (Progne tapera). La obra no registra la atmósfera en tiempo real: llega a la sala como archivo material ya construido. La disposición de los módulos deriva de datos de presencia, concentración y desplazamiento migratorio obtenidos en eBird Santa Fe. La retícula no ilustra el comportamiento de la especie: está físicamente organizada por él.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: Investigación en curso, 2024–2025</p>
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Tizne_Primal.png" alt="TIZNE PRIMAL" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">TIZNE PRIMAL consiste en una intervención mural construida a partir de madera carbonizada por transmisión directa desde un fragmento afectado por una descarga eléctrica atmosférica. Una masa negra comprimida ocupa un nicho rectangular excavado en el muro, como si la arquitectura contuviera bajo presión la persistencia material de un evento ya desaparecido. La obra no representa la descarga: trabaja con su inscripción física en la materia. Coordenadas geográficas y fecha del impacto aparecen grabadas en bajorrelieve bajo el muro intervenido.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: En desarrollo, 2025</p>
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/PERSISTEM.png" alt="PERSISTEM" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">PERSISTEM es una instalación construida a partir de un tubo de cemento industrial que emerge horizontalmente desde el piso de la sala como si siempre hubiera estado allí. El interior está pintado de rojo óxido mate y contiene una inscripción técnico-simbólica grabada en el umbral exacto donde la estructura desaparece bajo el suelo. La obra toma referencias de depósitos fundacionales y arqueologías hidráulicas para construir un dispositivo donde el espectador percibe consecuencias materiales sin acceder nunca al origen del sistema.</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>Año: 2024–2025</p>
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
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Tramas_Inestables_2.png" alt="TRAMAS INESTABLES" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">Visualización de referencia</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">TRAMAS INESTABLES es una instalación audiovisual que articula inteligencia artificial generativa, síntesis de video y superficies textiles realizadas manualmente. El proyecto parte de imágenes producidas con modelos de código abierto y posteriormente procesadas mediante Hydra Video Synth, donde el código introduce desplazamientos, ruido, retroalimentaciones y degradaciones progresivas sobre la imagen original. El material resultante se proyecta sobre estructuras de fieltro artesanal, transformando la superficie textil en un cuerpo activo que absorbe, distorsiona y reorganiza la proyección.</p>
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
