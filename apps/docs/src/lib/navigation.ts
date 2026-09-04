export const gettingStartedItems = [
  { slug: 'introduction', name: 'Introduction' },
  { slug: 'installation', name: 'Installation' },
  { slug: 'theming', name: 'Theming' },
]

export interface ComponentEntry {
  slug: string
  name: string
}

export interface ComponentCategory {
  label: string
  items: ComponentEntry[]
}

export const componentCategories: ComponentCategory[] = [
  {
    label: 'Forms',
    items: [
      { slug: 'button', name: 'Button' },
      { slug: 'checkbox', name: 'Checkbox' },
      { slug: 'fileupload', name: 'FileUpload' },
      { slug: 'input', name: 'Input' },
      { slug: 'numberinput', name: 'NumberInput' },
      { slug: 'radiogroup', name: 'RadioGroup' },
      { slug: 'select', name: 'Select' },
      { slug: 'slider', name: 'Slider' },
      { slug: 'switch', name: 'Switch' },
      { slug: 'textarea', name: 'Textarea' },
    ],
  },
  {
    label: 'Display',
    items: [
      { slug: 'avatar', name: 'Avatar' },
      { slug: 'badge', name: 'Badge' },
      { slug: 'emptystate', name: 'EmptyState' },
      { slug: 'skeleton', name: 'Skeleton' },
      { slug: 'table', name: 'Table' },
      { slug: 'tag', name: 'Tag' },
      { slug: 'title', name: 'Title' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { slug: 'animatedbackground', name: 'AnimatedBackground' },
      { slug: 'card', name: 'Card' },
      { slug: 'divider', name: 'Divider' },
      { slug: 'gradientorbs', name: 'GradientOrbs' },
      { slug: 'gridglow', name: 'GridGlow' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { slug: 'alert', name: 'Alert' },
      { slug: 'progress', name: 'Progress' },
      { slug: 'spinner', name: 'Spinner' },
      { slug: 'toast', name: 'Toast' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { slug: 'accordion', name: 'Accordion' },
      { slug: 'breadcrumb', name: 'Breadcrumb' },
      { slug: 'pagination', name: 'Pagination' },
      { slug: 'stepper', name: 'Stepper' },
      { slug: 'tabs', name: 'Tabs' },
    ],
  },
  {
    label: 'Overlays',
    items: [
      { slug: 'dialog', name: 'Dialog' },
      { slug: 'dropdown', name: 'Dropdown' },
      { slug: 'popover', name: 'Popover' },
      { slug: 'tooltip', name: 'Tooltip' },
    ],
  },
  {
    label: 'Chat',
    items: [
      { slug: 'chatbubble', name: 'ChatBubble' },
      { slug: 'chatinput', name: 'ChatInput' },
      { slug: 'chatlist', name: 'ChatList' },
      { slug: 'chatwindow', name: 'ChatWindow' },
      { slug: 'chatheader', name: 'ChatHeader' },
      { slug: 'typingindicator', name: 'TypingIndicator' },
      { slug: 'chattimestamp', name: 'ChatTimestamp' },
      { slug: 'chatreaction', name: 'ChatReaction' },
      { slug: 'chatattachment', name: 'ChatAttachment' },
      { slug: 'chatstatus', name: 'ChatStatus' },
      { slug: 'chatthread', name: 'ChatThread' },
    ],
  },
]

export const docsComponents: ComponentEntry[] = componentCategories.flatMap((c) => c.items)

export const pageExamples = [
  {
    label: 'Authentication',
    pages: [
      { slug: 'login', name: 'Login' },
      { slug: 'register', name: 'Register' },
      { slug: 'forgot-password', name: 'Forgot Password' },
    ],
  },
  {
    label: 'Dashboard',
    pages: [
      { slug: 'dashboard', name: 'Overview' },
      { slug: 'analytics', name: 'Analytics' },
      { slug: 'ecommerce', name: 'E-Commerce' },
    ],
  },
  {
    label: 'Forms',
    pages: [
      { slug: 'form', name: 'Contact Form' },
      { slug: 'checkout', name: 'Checkout' },
      { slug: 'survey', name: 'Survey' },
    ],
  },
  {
    label: 'Landing',
    pages: [
      { slug: 'animated-backgrounds', name: 'Animated Backgrounds' },
      { slug: 'landing', name: 'Marketing' },
      { slug: 'startup', name: 'Startup' },
    ],
  },
  {
    label: 'Settings',
    pages: [
      { slug: 'settings', name: 'Account' },
      { slug: 'billing', name: 'Billing' },
    ],
  },
  {
    label: 'Profile',
    pages: [
      { slug: 'profile', name: 'Developer' },
      { slug: 'team', name: 'Team' },
    ],
  },
  {
    label: 'Chat',
    pages: [
      { slug: 'direct-messages', name: 'Direct Messages' },
      { slug: 'ai-chat', name: 'AI Assistant' },
      { slug: 'team-chat', name: 'Team Channel' },
    ],
  },
]
