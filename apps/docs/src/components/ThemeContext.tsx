'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type ThemeName =
  | 'default'
  | 'midnight'
  | 'ocean'
  | 'sunset'
  | 'construction'
  | 'glass'
  | 'soft'
  | 'high-contrast'
  | 'monochrome-red'

export type DensityName = 'compact' | 'comfortable' | 'spacious'

export interface ThemeOption {
  value: ThemeName
  label: string
  description: string
}

export interface DensityOption {
  value: DensityName
  label: string
}

export const THEMES: ThemeOption[] = [
  { value: 'default', label: 'Default', description: 'Light, clean — Indigo primary' },
  { value: 'midnight', label: 'Midnight', description: 'Dark, sleek — Violet primary' },
  { value: 'ocean', label: 'Ocean', description: 'Cool, calming — Cyan primary' },
  { value: 'sunset', label: 'Sunset', description: 'Warm, vibrant — Amber primary' },
  { value: 'construction', label: 'Construction', description: 'Industrial, bold — Yellow primary' },
  { value: 'glass', label: 'Glass', description: 'Frosted transparency — Violet primary' },
  { value: 'soft', label: 'Soft', description: 'Neomorphic, gentle — Sky primary' },
  { value: 'high-contrast', label: 'High Contrast', description: 'WCAG accessible — Yellow primary' },
  {
    value: 'monochrome-red',
    label: 'Monochrome Red',
    description: 'White/gray/black base — Red primary',
  },
]

export const DENSITIES: DensityOption[] = [
  { value: 'compact', label: 'Compact' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'spacious', label: 'Spacious' },
]

interface ThemeContextValue {
  theme: ThemeName
  density: DensityName
  setTheme: (theme: ThemeName) => void
  setDensity: (density: DensityName) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'midnight',
  density: 'comfortable',
  setTheme: () => {},
  setDensity: () => {},
})

const STORAGE_KEY_THEME = 'vui-docs-theme'
const STORAGE_KEY_DENSITY = 'vui-docs-density'

function readStorage<T extends string>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  return (localStorage.getItem(key) as T | null) ?? fallback
}

function isThemeName(value: string): value is ThemeName {
  return THEMES.some((theme) => theme.value === value)
}

function isDensityName(value: string): value is DensityName {
  return DENSITIES.some((density) => density.value === value)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('midnight')
  const [density, setDensityState] = useState<DensityName>('comfortable')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = readStorage<string>(STORAGE_KEY_THEME, 'midnight')
    const storedDensity = readStorage<string>(STORAGE_KEY_DENSITY, 'comfortable')
    setThemeState(isThemeName(storedTheme) ? storedTheme : 'midnight')
    setDensityState(isDensityName(storedDensity) ? storedDensity : 'comfortable')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    THEMES.forEach((t) => html.classList.remove(`vui-theme-${t.value}`))
    html.classList.add(`vui-theme-${theme}`)
    localStorage.setItem(STORAGE_KEY_THEME, theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    DENSITIES.forEach((d) => html.classList.remove(`vui-density-${d.value}`))
    html.classList.add(`vui-density-${density}`)
    localStorage.setItem(STORAGE_KEY_DENSITY, density)
  }, [density, mounted])

  const setTheme = (next: ThemeName) => setThemeState(next)
  const setDensity = (next: DensityName) => setDensityState(next)

  return (
    <ThemeContext.Provider value={{ theme, density, setTheme, setDensity }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
