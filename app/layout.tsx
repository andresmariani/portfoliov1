import './globals.css'
import type { Metadata } from 'next'

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
        {children}
      </body>
    </html>
  )
}