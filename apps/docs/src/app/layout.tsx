import type { Metadata } from 'next'
import './globals.css'
import '@velocityuikit/velocityui/dist/style.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'VelocityUI — Accessible React Components',
  description:
    'Open-source React component library with CSS Modules scoped styles and TypeScript support.',
  keywords: ['react', 'component library', 'ui', 'typescript', 'css modules', 'open source'],
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
  const themeBootScript = `
    (function () {
      var themes = ['default','midnight','ocean','tangerine','construction','glass','soft','high-contrast','monochrome-red'];
      var densities = ['compact','comfortable','spacious'];
      var html = document.documentElement;
      var storedTheme = localStorage.getItem('vui-docs-theme');
      var storedDensity = localStorage.getItem('vui-docs-density');
      var theme = themes.indexOf(storedTheme || '') >= 0 ? storedTheme : 'midnight';
      var density = densities.indexOf(storedDensity || '') >= 0 ? storedDensity : 'comfortable';

      for (var i = 0; i < themes.length; i++) {
        html.classList.remove('vui-theme-' + themes[i]);
      }
      for (var j = 0; j < densities.length; j++) {
        html.classList.remove('vui-density-' + densities[j]);
      }

      html.classList.add('vui-theme-' + theme);
      html.classList.add('vui-density-' + density);
    })();
  `

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

