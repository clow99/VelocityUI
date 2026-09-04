import { CopyButton } from '@/components/CopyButton'
import { codeToTokens, type BundledLanguage } from 'shiki'

export async function CodeBlock({
  code,
  language = 'tsx',
  filename,
}: {
  code: string
  language?: string
  filename?: string
}) {
  const { tokens } = await codeToTokens(code, {
    lang: language as BundledLanguage,
    theme: 'github-dark',
  })
  return (
    <div className="code-panel">
      <div className="code-toolbar">
        <span>
          <span className="code-dot" />
          {filename || language}
        </span>
        <CopyButton text={code} />
      </div>
      <pre tabIndex={0} aria-label={language + ' code example'}>
        <code>
          {tokens.map((line, index) => (
            <span key={index}>
              {line.map((token, i) => (
                <span key={i} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
              {index < tokens.length - 1 ? '\n' : ''}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
