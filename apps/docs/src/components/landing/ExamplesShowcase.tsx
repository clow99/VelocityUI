import { ExampleCard } from '@/components/ExampleCard'
export function ExamplesShowcase() {
  return (
    <div className="examples-grid">
      <ExampleCard slug="dashboard" name="A clearer overview" category="Dashboard" />
      <ExampleCard slug="login" name="A warm welcome" category="Authentication" />
      <ExampleCard slug="team-chat" name="A better conversation" category="Chat" />
    </div>
  )
}
