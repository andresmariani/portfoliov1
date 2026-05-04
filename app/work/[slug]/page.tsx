"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { use } from "react";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export default function WorkPage({ params }: WorkPageProps) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  // Helper function to safely get translations
  const getTranslation = (path: string) => {
    const keys = path.split('.');
    let current: any = t('work'); // Start from 'work' object
    
    // We already know it starts with 'work.', so skip the first part
    for (let i = 1; i < keys.length; i++) {
      if (current[keys[i]] === undefined) return '';
      current = current[keys[i]];
    }
    return current;
  };

  const title = getTranslation(`work.${project.translationKey}.title`);
  const description = getTranslation(`work.${project.translationKey}.description`);
  const year = getTranslation(`work.${project.translationKey}.year`);
  const status = getTranslation(`work.${project.translationKey}.status`);
  const materials = getTranslation(`work.${project.translationKey}.materials`);
  const territory = getTranslation(`work.${project.translationKey}.territory`);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar Spacing */}
      <div className="h-24 lg:h-32"></div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-12 pb-32">
        
        {/* Back Link */}
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('work.backToIndex')}
        </Link>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-secondary mb-16 lg:mb-24 overflow-hidden">
          <Image 
            src={project.previewImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Editorial Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 lg:mb-48">
          
          {/* Title and Description */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-widest uppercase leading-tight">
              {title}
            </h1>
            <div className="max-w-xl">
              <p className="text-xl lg:text-2xl font-sans font-light leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          {/* Technical Info (Ficha Técnica) */}
          <div className="col-span-1 lg:col-span-4 lg:col-start-9">
            <div className="border-t border-border/30 pt-6">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-sans mb-8">
                Technical Data
              </h3>
              
              <dl className="space-y-6">
                <div className="flex flex-col space-y-1">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">{t('work.metadata.year')}</dt>
                  <dd className="text-sm font-sans tracking-wide text-foreground/90">{year}</dd>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">{t('work.metadata.status')}</dt>
                  <dd className="text-sm font-sans tracking-wide text-foreground/90">{status}</dd>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">{t('work.metadata.territory')}</dt>
                  <dd className="text-sm font-sans tracking-wide text-foreground/90">{territory}</dd>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-sans">{t('work.metadata.materials')}</dt>
                  <dd className="text-sm font-sans font-light leading-relaxed text-foreground/80">{materials}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Vertical Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-32 lg:space-y-48">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative w-full overflow-hidden bg-secondary ${
                  idx % 2 === 0 
                    ? 'aspect-[4/3] lg:aspect-[16/9] lg:w-10/12' 
                    : 'aspect-[3/4] lg:aspect-[4/5] lg:w-8/12 ml-auto'
                }`}
              >
                <Image 
                  src={img}
                  alt={`${title} - detail ${idx + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
} 