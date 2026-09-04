import Link from 'next/link'
import { BrandMark, Icon } from './Icon'
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-grid">
        <div>
          <Link href="/" className="brand">
            <BrandMark />
            <span>
              Velocity<span className="brand-light">UI</span>
            </span>
          </Link>
          <p>
            Thoughtful components.
            <br />
            Room for your ideas.
          </p>
        </div>
        <div>
          <span className="eyebrow">Build</span>
          <Link href="/docs">Components</Link>
          <Link href="/examples">Examples</Link>
          <Link href="/docs/theming">Theming</Link>
        </div>
        <div>
          <span className="eyebrow">Resources</span>
          <Link href="/docs/installation">Installation</Link>
          <Link href="/docs/ai-guide">AI agent guide</Link>
          <a href="https://github.com/clow99/VelocityUI" target="_blank" rel="noreferrer">
            GitHub <Icon name="external" size={13} />
          </a>
        </div>
        <div className="footer-note">
          <span className="status-dot" /> Open source. Yours to build with.
          <p>MIT licensed · React + TypeScript</p>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <span>Designed & built by <a href="https://cameronlow.com">Cameron Low <Icon name="external" size={13} /></a> · {new Date().getFullYear()}</span>
        <a
          href="https://www.npmjs.com/package/@velocityuikit/velocityui"
          target="_blank"
          rel="noreferrer"
        >
          @velocityuikit/velocityui <Icon name="external" size={13} />
        </a>
      </div>
    </footer>
  )
}
