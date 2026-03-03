import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'VelocityUI — Fast, Beautiful React Components',
  description:
    'A modern, accessible React component library with CSS Modules. Install once, use everywhere.',
  keywords: ['react', 'component library', 'ui', 'typescript', 'css modules'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
