"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const worksList = [
  { id: "tizne_primal", image: "/images/Tizne_Primal.png" },
  { id: "persistem", image: "/images/PERSISTEM.png" },
  { id: "canal_ombrosc", image: "" },
  { id: "fuga_noir", image: "/images/Fuga_Noir.png" },
  { id: "traza_crono", image: "/images/Traza_Crono_2.png" },
  { id: "cedencia_pleuro", image: "/images/Cedencia_Pleuro_2.png" },
  { id: "rasvnte", image: "" },
  { id: "tramas_inestables", image: "/images/Tramas_Inestables_2.png" },
];

export default function Works() {
  const { t } = useLanguage();

  return (
    <div className="p-8 md:p-12 text-black bg-[#f8f8f8] min-h-screen">
      
      {/* Header */}
      <header className="mb-12 border-b border-black pb-4">
        <h1 className="text-2xl font-bold mb-2">{t.header.title}</h1>
        <p className="text-sm italic">{t.header.subtitle}</p>
        <p className="text-xs mt-2 text-gray-600">{t.header.coords}</p>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Columna Izquierda: Menú */}
        <nav className="w-full md:w-48 shrink-0">
          <ul className="space-y-3 text-sm underline decoration-1 underline-offset-2">
            <li><Link href="/" className="hover:text-gray-600">{t.nav.home}</Link></li>
            <li><Link href="/statement" className="hover:text-gray-600">{t.nav.statement}</Link></li>
            <li><Link href="/works" className="hover:text-gray-600">{t.nav.works}</Link></li>
            <li><Link href="/cv" className="hover:text-gray-600">{t.nav.cv}</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">{t.nav.contact}</Link></li>
          </ul>
        </nav>

        {/* Columna Derecha: Works Index */}
        <main className="flex-1 max-w-4xl text-sm leading-relaxed space-y-12">
          
          <section className="mb-16">
            <h2 className="font-bold text-base mb-6">{t.research_page.title}</h2>
            <div className="space-y-4">
              <p>{t.research_page.p1}</p>
              <p>{t.research_page.p2}</p>
              <p>{t.research_page.p3}</p>
            </div>
          </section>

          <section>
            <p className="italic mb-8">{t.works.subtitle}</p>
          </section>

          <section className="space-y-16">
            
            {worksList.map((work) => {
              const item = (t.works.items as any)[work.id];
              if (!item) return null;

              return (
                <div key={work.id}>
                  {work.id === 'tramas_inestables' && (
                    <hr className="border-black mb-16 mt-8" />
                  )}
                  <article className="border-t border-gray-300 pt-6">
                    <h2 className="font-bold text-base mb-6">
                      <Link href={`/works/${work.id.replace('_', '-')}`} className="underline hover:text-gray-600">
                        {item.title}
                      </Link>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/2">
                        <div className="relative aspect-[3/2] bg-[#e5e5e5] flex items-center justify-center border border-gray-200">
                          {work.image ? (
                            <Image src={work.image} alt={item.title} fill className="object-cover" />
                          ) : (
                            <span className="text-xs text-gray-400 tracking-widest uppercase">Imagen en proceso</span>
                          )}
                        </div>
                        <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="mb-4 italic text-gray-800">{item.subtitle}</p>
                        <p className="mb-6">{item.desc}</p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}

          </section>
        </main>
      </div>
    </div>
  );
}
