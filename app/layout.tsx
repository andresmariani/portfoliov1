import './globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from '../context/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'

export const metadata: Metadata = {
  title: 'Andrés Mariani Bergoen | Artista Visual',
  description: 'Archivo y Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}