import Link from 'next/link'
import { Icon } from './Icon'
export function ExampleCard({
  slug,
  name,
  category,
}: {
  slug: string
  name: string
  category: string
}) {
  const chat = category === 'Chat'
  const form = ['Authentication', 'Forms', 'Settings'].includes(category)
  return (
    <Link href={'/examples/' + slug} className="example-card">
      <div
        className={'example-art ' + (chat ? 'art-chat' : form ? 'art-form' : 'art-dashboard')}
        aria-hidden="true"
      >
        <div className="art-window">
          <div className="art-top">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="art-body">
            {chat ? (
              <>
                <div className="art-message" />
                <div className="art-message sent" />
                <div className="art-message" />
                <div className="art-input" />
              </>
            ) : form ? (
              <>
                <div className="art-title" />
                <div className="art-line" />
                <div className="art-field" />
                <div className="art-field" />
                <div className="art-submit" />
              </>
            ) : (
              <>
                <div className="art-side">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="art-content">
                  <div className="art-title" />
                  <div className="art-stats">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="art-chart">
                    {[35, 50, 42, 67, 57, 82, 74, 98].map((h, i) => (
                      <i key={i} style={{ height: h + '%' }} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <span className="example-open">
          Open example <Icon name="external" size={14} />
        </span>
      </div>
      <div className="example-caption">
        <div>
          <span>{category}</span>
          <h3>{name}</h3>
        </div>
        <Icon name="arrow" size={18} />
      </div>
    </Link>
  )
}
