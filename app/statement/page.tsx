import Link from "next/link";

export default function Statement() {
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

        {/* Columna Derecha: Statement */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="font-bold mb-6 text-lg">STATEMENT</h2>
            <p>
              Trabajo con materia que ya fue afectada. No me interesa la materia en estado neutro sino la materia que lleva inscripta una fuerza que ya no está — la descarga que carbonizó la madera, la presión que el agua ejerció sobre el sedimento, el tiempo que acumuló hollín sobre un filtro, el calor que atravesó el vidrio y quedó como burbuja en su superficie.
            </p>
            <p className="mt-6">
              Esa materia no representa nada. Es el registro directo de algo que ocurrió. Mi trabajo consiste en encontrar el dispositivo que haga perceptible esa condición — que permita que lo que la materia porta llegue al cuerpo del espectador sin que el lenguaje lo agote antes.
            </p>
            <p className="mt-6">
              Vengo del litoral del Paraná y ese territorio aparece en mis obras no como tema sino como sustancia: en los sedimentos, en el agua, en las arcillas, en el aire que la golondrina parda atraviesa cada primavera sobre el río. No hago obras sobre el litoral — hago obras con él.
            </p>
            <p className="mt-6">
              Lo que más me interesa de este cuerpo de obra es la pregunta que lo atraviesa sin que ninguna pieza la responda del todo: qué persiste cuando el origen ha desaparecido. La restitución sin referente. El registro sin evento. La forma de un instrumento que no llegó a ser. La pérdida que continúa ocurriendo. El umbral que solo se cruza para desaparecer. Cada pieza es una manera diferente de sostener esa pregunta abierta.
            </p>
            <p className="mt-6">
              Lo que atraviesa el conjunto no es un tema sino una gramática: la materia como archivo de fuerzas que la exceden, el espacio de exhibición como lugar donde esa condición se vuelve perceptible, el cuerpo del espectador como parte constitutiva del dispositivo.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}