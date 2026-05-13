"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-8 right-8 md:top-12 md:right-12 z-50 text-xs font-mono tracking-widest text-[#888]">
      <button 
        onClick={() => setLanguage('es')}
        className={`transition-colors duration-300 ${language === 'es' ? 'text-black font-bold' : 'hover:text-black'}`}
      >
        ESP
      </button>
      <span className="mx-2">/</span>
      <button 
        onClick={() => setLanguage('en')}
        className={`transition-colors duration-300 ${language === 'en' ? 'text-black font-bold' : 'hover:text-black'}`}
      >
        ENG
      </button>
    </div>
  );
}
