export type ThemeName =
  | 'default'
  | 'midnight'
  | 'ocean'
  | 'dark-cyan'
  | 'tangerine'
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
  { value: 'default', label: 'Default', description: 'Neutral light surfaces with a blue accent' },
  { value: 'midnight', label: 'Midnight', description: 'Soft charcoal surfaces with a periwinkle accent' },
  { value: 'ocean', label: 'Ocean', description: 'Cool, calming — Cyan primary' },
  { value: 'dark-cyan', label: 'Dark Cyan', description: 'Neutral dark, techy — Cyan primary' },
  { value: 'tangerine', label: 'Tangerine', description: 'Bright, warm — Orange primary' },
  {
    value: 'construction',
    label: 'Construction',
    description: 'Industrial, bold — Yellow primary',
  },
  { value: 'glass', label: 'Glass', description: 'Frosted transparency — Violet primary' },
  { value: 'soft', label: 'Soft', description: 'Neomorphic, gentle — Sky primary' },
  {
    value: 'high-contrast',
    label: 'High Contrast',
    description: 'WCAG accessible — Yellow primary',
  },
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
