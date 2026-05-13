"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

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
            <li><Link href="/research" className="hover:text-gray-600">{t.nav.research}</Link></li>
            <li><Link href="/cv" className="hover:text-gray-600">{t.nav.cv}</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">{t.nav.contact}</Link></li>
          </ul>
        </nav>

        {/* Columna Derecha: Works Index */}
        <main className="flex-1 max-w-4xl text-sm leading-relaxed space-y-12">
          
          <section>
            <p className="italic mb-8">{t.works.subtitle}</p>
          </section>

          <section className="space-y-16">
            
            {/* FUGA NOIR */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/fuga-noir" className="underline hover:text-gray-600">{t.works.fuga_noir.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Fuga_Noir.png" alt="FUGA NOIR" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.fuga_noir.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.fuga_noir.year}</p>
                    <p>{t.works.labels.status} {t.works.fuga_noir.status}</p>
                    <p>{t.works.labels.format} {t.works.fuga_noir.format}</p>
                    <p>{t.works.labels.materials} {t.works.fuga_noir.materials}</p>
                    <p>{t.works.labels.territory} {t.works.fuga_noir.territory}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* CEDENCIA PLEURO */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/cedencia-pleuro" className="underline hover:text-gray-600">{t.works.cedencia_pleuro.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Cedencia_Pleuro_2.png" alt="CEDENCIA PLEURO" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.cedencia_pleuro.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.cedencia_pleuro.year}</p>
                    <p>{t.works.labels.status} {t.works.cedencia_pleuro.status}</p>
                    <p>{t.works.labels.format} {t.works.cedencia_pleuro.format}</p>
                    <p>{t.works.labels.materials} {t.works.cedencia_pleuro.materials}</p>
                    <p>{t.works.labels.territory} {t.works.cedencia_pleuro.territory}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TRAZA CRONO */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/traza-crono" className="underline hover:text-gray-600">{t.works.traza_crono.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Traza_Crono_2.png" alt="TRAZA CRONO" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.traza_crono.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.traza_crono.year}</p>
                    <p>{t.works.labels.status} {t.works.traza_crono.status}</p>
                    <p>{t.works.labels.format} {t.works.traza_crono.format}</p>
                    <p>{t.works.labels.materials} {t.works.traza_crono.materials}</p>
                    <p>{t.works.labels.territory} {t.works.traza_crono.territory}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TIZNE PRIMAL */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/tizne-primal" className="underline hover:text-gray-600">{t.works.tizne_primal.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Tizne_Primal.png" alt="TIZNE PRIMAL" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.tizne_primal.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.tizne_primal.year}</p>
                    <p>{t.works.labels.status} {t.works.tizne_primal.status}</p>
                    <p>{t.works.labels.format} {t.works.tizne_primal.format}</p>
                    <p>{t.works.labels.materials} {t.works.tizne_primal.materials}</p>
                    <p>{t.works.labels.territory} {t.works.tizne_primal.territory}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* PERSISTEM */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/persistem" className="underline hover:text-gray-600">{t.works.persistem.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/PERSISTEM.png" alt="PERSISTEM" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.persistem.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.persistem.year}</p>
                    <p>{t.works.labels.status} {t.works.persistem.status}</p>
                    <p>{t.works.labels.format} {t.works.persistem.format}</p>
                    <p>{t.works.labels.materials} {t.works.persistem.materials}</p>
                    <p>{t.works.labels.territory} {t.works.persistem.territory}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* TRAMAS INESTABLES */}
            <article className="border-t border-gray-300 pt-6">
              <h2 className="font-bold text-base mb-6"><Link href="/works/tramas-inestables" className="underline hover:text-gray-600">{t.works.tramas_inestables.title}</Link></h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/2] bg-gray-100">
                    <Image src="/images/Tramas_Inestables_2.png" alt="TRAMAS INESTABLES" fill className="object-cover border border-gray-200" />
                  </div>
                  <p className="text-[11px] italic text-gray-500 mt-3">{t.works.ref_viz}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="mb-6">{t.works.tramas_inestables.desc}</p>
                  <div className="text-xs text-gray-600 space-y-1 border-t border-dotted border-gray-300 pt-4">
                    <p>{t.works.labels.year} {t.works.tramas_inestables.year}</p>
                    <p>{t.works.labels.status} {t.works.tramas_inestables.status}</p>
                    <p>{t.works.labels.format} {t.works.tramas_inestables.format}</p>
                    <p>{t.works.labels.materials} {t.works.tramas_inestables.materials}</p>
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
