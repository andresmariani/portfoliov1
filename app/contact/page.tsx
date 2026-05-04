import Link from "next/link";

export default function Contact() {
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

        {/* Columna Derecha: Contacto */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-12">
          
          <section>
            <h2 className="font-bold uppercase text-xs mb-8">CONTACT / INQUIRIES</h2>
            
            <div className="space-y-6">
              <p>
                Actualmente disponible para proyectos de exhibición, investigación material y residencias.
              </p>
              
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block mb-1">Email:</span>
                  <a href="mailto:andresmarianibergoen@gmail.com" className="underline hover:text-gray-600">andresmarianibergoen@gmail.com</a>
                </li>
                
                <li>
                  <span className="font-bold block mb-1">Instagram:</span>
                  <a href="https://instagram.com/charquemal" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">@charquemal</a>
                </li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}