import type { Metadata } from 'next'
import './globals.css'
import '@clow99/velocityui/dist/style.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'VelocityUI — Fast, Beautiful React Components',
  description:
    'A modern, accessible React component library with CSS Modules. Install once, use everywhere.',
  keywords: ['react', 'component library', 'ui', 'typescript', 'css modules'],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
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

