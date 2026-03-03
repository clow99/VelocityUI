import type { Metadata } from 'next'
import './globals.css'
import 'velocityui/dist/style.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'

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
    <html lang="en" className="scroll-smooth vui-theme-default vui-density-comfortable">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
