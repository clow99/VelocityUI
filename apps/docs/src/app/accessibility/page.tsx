import { PolicyDocument } from '@/components/PolicyDocument'

export const metadata = { title: 'Accessibility — VelocityUI', alternates: { canonical: 'https://velocityui.com/accessibility' } }

export default function AccessibilityPage() {
  return <PolicyDocument title="Accessibility">
    <h2>Our engineering target</h2>
    <p>Cameron Low is working toward WCAG 2.2 Level AA on this documentation site. This is a development target, not a certification of every component, example, theme or application using the library.</p>
    <h2>Using the site</h2>
    <p>Use the Skip to content link, keyboard navigation and visible focus indicators to reach documentation. The search button opens the documentation search; Escape closes it. Appearance settings include a high-contrast theme and density choices. Browser zoom and operating-system reduced-motion settings are supported by the reviewed interface.</p>
    <h2>Known review limits</h2>
    <p>Complex tables, chat samples, animated backgrounds and every combination of theme, density and assistive technology still require individual testing. Component accessibility depends on the labels, content and interactions supplied by the application developer. A passing automated check alone is not proof of full accessibility.</p>
    <h2>Help and feedback</h2>
    <p>Email <a href="mailto:hello@cameronlow.com?subject=VelocityUI%20accessibility">hello@cameronlow.com</a> with the page or component, the problem and, if useful, your browser and assistive technology. Cameron can discuss an alternative way to obtain the information and investigate the barrier. Do not include sensitive personal information. These notices are available as HTML without signing in and can be printed from your browser.</p>
  </PolicyDocument>
}
