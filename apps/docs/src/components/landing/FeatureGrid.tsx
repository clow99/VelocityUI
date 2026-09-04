import { Icon } from '@/components/Icon'
const features = [
  {
    icon: 'code',
    title: 'Fits your stack',
    description:
      'React and TypeScript. Scoped CSS Modules. A familiar API that stays out of your way.',
  },
  {
    icon: 'palette',
    title: 'Your visual language',
    description:
      'Ten themes, three densities, and CSS variables for the details that make it yours.',
  },
  {
    icon: 'shield',
    title: 'Considered interactions',
    description:
      'Keyboard navigation, visible focus, accessible labels, and respect for reduced motion.',
  },
  {
    icon: 'layers',
    title: 'Only what you need',
    description: 'Tree-shakeable JavaScript with no third-party runtime dependencies beyond React.',
  },
] as const
export function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((f) => (
        <div key={f.title}>
          <span className="feature-icon">
            <Icon name={f.icon} size={21} />
          </span>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  )
}
