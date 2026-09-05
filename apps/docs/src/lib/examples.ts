import { pageExamples } from './navigation'

const details: Record<string, { description: string; features: string[] }> = {
  login: {
    description:
      'A welcoming sign-in flow with clear fields, validation, and helpful feedback.',
    features: ['Email sign-in', 'Validation'],
  },
  register: {
    description:
      'Help new users get started with a complete account creation form.',
    features: ['Password confirmation', 'Form feedback'],
  },
  'forgot-password': {
    description:
      'A guided recovery flow, from email request to a new password.',
    features: ['Multiple steps', 'Success states'],
  },
  dashboard: {
    description:
      'A clear view of revenue, recent orders, and the people behind them.',
    features: ['Metric cards', 'Data tables', 'Export dialog'],
  },
  analytics: {
    description:
      'Explore performance with visual reports and date-range controls.',
    features: ['Charts', 'Date filters', 'Reports'],
  },
  ecommerce: {
    description:
      'Keep sales, recent orders, and product inventory in one clear view.',
    features: ['Sales metrics', 'Order history', 'Stock alerts'],
  },
  form: {
    description:
      'A considered contact form with helpful validation and feedback.',
    features: ['Validation', 'Contact preferences'],
  },
  checkout: {
    description:
      'Take an order from delivery details through payment and confirmation.',
    features: ['Step-by-step flow', 'Order summary'],
  },
  survey: {
    description:
      'Collect thoughtful feedback with a focused, multi-step questionnaire.',
    features: ['Progress', 'Choice inputs'],
  },
  'animated-backgrounds': {
    description:
      'Give your next landing page a little atmosphere and movement.',
    features: ['Live presets', 'Motion controls'],
  },
  landing: {
    description:
      'Introduce a product with a complete story, from features to pricing.',
    features: ['Feature sections', 'Pricing', 'FAQ'],
  },
  startup: {
    description:
      'A launch page with room for your product, your team, and your next users.',
    features: ['Product hero', 'Testimonials', 'Signup form'],
  },
  settings: {
    description:
      'Bring profile, notifications, and account preferences together.',
    features: ['Tabbed settings', 'Preferences'],
  },
  billing: {
    description:
      'Make plans, payment details, and past invoices easy to manage.',
    features: ['Plan selection', 'Invoices', 'Dialogs'],
  },
  profile: {
    description:
      'Put a person and their work in the spotlight with a detailed profile.',
    features: ['Identity', 'Activity', 'Skills'],
  },
  team: {
    description:
      'A home for your team, with member roles and invitation flows.',
    features: ['Member cards', 'Invitations', 'Roles'],
  },
  'direct-messages': {
    description:
      'Keep conversations moving with a responsive messaging workspace.',
    features: ['Conversations', 'Attachments', 'Reactions'],
  },
  'ai-chat': {
    description:
      'A conversational workspace with suggested prompts and simulated streaming replies.',
    features: ['Prompt suggestions', 'Streaming', 'Typing states'],
  },
  'team-chat': {
    description:
      'Bring the team into one conversation with channels, threads, and reactions.',
    features: ['Channels', 'Threads', 'Reactions'],
  },
}

export const examples = pageExamples.flatMap((group) =>
  group.pages.map((page) => ({
    ...page,
    category: group.label,
    ...details[page.slug],
    href: `/examples/${page.slug}`,
    preview: `/examples/previews/${page.slug}.webp`,
  })),
)
export type Example = (typeof examples)[number]

export function matchesExample(example: Example, query: string) {
  const text =
    `${example.name} ${example.category} ${example.description} ${example.features.join(' ')}`.toLowerCase()
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .every((word) => text.includes(word))
}
