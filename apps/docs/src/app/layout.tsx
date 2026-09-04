import type { Metadata } from 'next'
import '@velocityuikit/velocityui/dist/style.css'
import './globals.css'
import './refresh.css'
import './workspace.css'
import './component-studies.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'VelocityUI — Accessible React Components',
  description:
    '46 React components, 10 themes, and 19 page examples. An open-source UI library by Cameron Low, with TypeScript and scoped CSS. No Tailwind setup required.',
  authors: [{ name: 'Cameron Low', url: 'https://cameronlow.com' }],
  creator: 'Cameron Low',
  keywords: ['react', 'component library', 'ui', 'typescript', 'css modules', 'open source'],
  manifest: '/site.webmanifest?v=3',
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/logo.svg?v=3', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeBootScript = `
    (function () {
      var themes = ['default','midnight','ocean','dark-cyan','tangerine','construction','glass','soft','high-contrast','monochrome-red'];
      var densities = ['compact','comfortable','spacious'];
      var html = document.documentElement;
      var storedTheme = null; var storedDensity = null;
      try { storedTheme = localStorage.getItem('vui-docs-theme'); storedDensity = localStorage.getItem('vui-docs-density'); } catch (e) {}

      var theme = themes.indexOf(storedTheme || '') >= 0 ? storedTheme : 'default';
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
    <html lang="en" className="vui-theme-default vui-density-comfortable" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
