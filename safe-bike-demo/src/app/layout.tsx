import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safe Bike - Seguretat Intel·ligent per a Ciclistes',
  description: 'App de seguretat per a ciclistes basada en IA. Analitza més de 100 paràmetres en temps real.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
