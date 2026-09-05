import Link from 'next/link'
import { examples } from '@/lib/examples'
import { Icon } from './Icon'
import styles from './examples/ExampleGallery.module.css'

export function ExampleCard({
  slug,
  name,
  category,
  featured = false,
}: {
  slug: string
  name: string
  category: string
  featured?: boolean
}) {
  const example = examples.find((item) => item.slug === slug)
  if (!example) return null
  return (
    <Link
      href={example.href}
      className={`${styles.card} ${featured ? styles.featuredCard : ''}`}
    >
      <div className={styles.art}>
        <div className={styles.browserBar} aria-hidden="true">
          <span>
            <i />
            <i />
            <i />
          </span>
          <small>velocityui / {slug}</small>
          <Icon name="external" size={12} />
        </div>
        <img
          src={example.preview}
          alt={`${example.name} interface preview`}
          width={1120}
          height={740}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className={styles.open}>
          Explore example <Icon name="arrow" size={15} />
        </span>
      </div>
      <div className={styles.caption}>
        <div className={styles.cardLabel}>
          <span>{category}</span>
          <span>
            Live demo <Icon name="external" size={12} />
          </span>
        </div>
        <h3>
          {name}
          <Icon name="arrow" size={19} />
        </h3>
        <p>{example.description}</p>
        <div className={styles.features}>
          {example.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
