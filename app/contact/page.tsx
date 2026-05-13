"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
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

        {/* Columna Derecha: Contacto */}
        <main className="flex-1 max-w-2xl text-sm leading-relaxed space-y-12">
          
          <section>
            <h2 className="font-bold uppercase text-xs mb-8">{t.contact.title}</h2>
            
            <div className="space-y-6">
              <p>{t.contact.availability}</p>
              
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block mb-1">{t.contact.email_label}</span>
                  <a href="mailto:andresmarianibergoen@gmail.com" className="underline hover:text-gray-600">andresmarianibergoen@gmail.com</a>
                </li>
                
                <li className="hidden">
                  <span className="font-bold block mb-1">{t.contact.instagram_label}</span>
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