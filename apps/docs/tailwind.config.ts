import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        vui: {
          bg: 'var(--vui-bg)',
          surface: 'var(--vui-surface)',
          'surface-muted': 'var(--vui-surface-muted)',
          text: 'var(--vui-text)',
          'text-muted': 'var(--vui-text-muted)',
          'text-subtle': 'var(--vui-text-subtle)',
          'text-inverse': 'var(--vui-text-inverse)',
          border: 'var(--vui-border)',
          'border-strong': 'var(--vui-border-strong)',
          divider: 'var(--vui-divider)',
          primary: 'var(--vui-primary)',
          'primary-hover': 'var(--vui-primary-hover)',
          'primary-contrast': 'var(--vui-primary-contrast)',
          'primary-soft': 'var(--vui-primary-soft)',
          secondary: 'var(--vui-secondary)',
          'secondary-hover': 'var(--vui-secondary-hover)',
          'secondary-text': 'var(--vui-secondary-text)',
          danger: 'var(--vui-danger)',
          'badge-default-bg': 'var(--vui-badge-default-bg)',
          'badge-default-color': 'var(--vui-badge-default-color)',
          'badge-default-border': 'var(--vui-badge-default-border)',
          'badge-info-bg': 'var(--vui-badge-info-bg)',
          'badge-info-color': 'var(--vui-badge-info-color)',
          'badge-info-border': 'var(--vui-badge-info-border)',
          'badge-success-bg': 'var(--vui-badge-success-bg)',
          'badge-success-color': 'var(--vui-badge-success-color)',
          'badge-success-border': 'var(--vui-badge-success-border)',
          'badge-warning-bg': 'var(--vui-badge-warning-bg)',
          'badge-warning-color': 'var(--vui-badge-warning-color)',
          'badge-warning-border': 'var(--vui-badge-warning-border)',
          'badge-danger-bg': 'var(--vui-badge-danger-bg)',
          'badge-danger-color': 'var(--vui-badge-danger-color)',
          'badge-danger-border': 'var(--vui-badge-danger-border)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        vui: 'var(--vui-backdrop-blur)',
      },
    },
  },
  plugins: [],
}

export default config
