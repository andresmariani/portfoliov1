"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function CV() {
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

        {/* Columna Derecha: CV */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-12">
          
          <section>
            <h2 className="font-bold uppercase text-xs mb-4">{t.cv.sections.bio}</h2>
            <p>{t.cv.bio_text}</p>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">{t.cv.sections.education}</h2>
            <ul className="space-y-4">
              {t.cv.education_list.map((item, i) => (
                <li key={i}>
                  <p>{item.title}</p>
                  <p className="text-xs text-gray-600">{item.institution}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">{t.cv.sections.projects}</h2>
            <ul className="space-y-6">
              {t.cv.projects_list.map((item, i) => (
                <li key={i}>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">{t.cv.sections.audiovisual}</h2>
            <ul className="space-y-6">
              {t.cv.audiovisual_list.map((item, i) => (
                <li key={i}>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-gray-300 pt-6">
            <h2 className="font-bold uppercase text-xs mb-4">{t.cv.sections.awards}</h2>
            <p>{t.cv.awards_text}</p>
          </section>

        </main>
      </div>
    </div>
  );
}