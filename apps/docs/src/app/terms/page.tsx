import { PolicyDocument } from '@/components/PolicyDocument'

export const metadata = { title: 'Terms — VelocityUI', alternates: { canonical: 'https://velocityui.com/terms' } }

export default function TermsPage() {
  return <PolicyDocument title="Website terms">
    <h2>Purpose and operator</h2>
    <p>Cameron Low personally operates VelocityUI from Ontario, Canada. This site provides software documentation and fictional interface examples. No payment is accepted. Example prices, shipping, subscriptions and order confirmations are demonstrations and create no transaction, account or delivery obligation.</p>
    <h2>Open-source licence</h2>
    <p>The VelocityUI software and associated documentation are governed by their existing <a href="https://github.com/clow99/VelocityUI/blob/main/LICENSE">MIT licence</a>, including its permission, copyright-notice, warranty and liability provisions. These website terms do not narrow those licence rights or change any third-party licence. Check the licence shipped with the version you use.</p>
    <h2>Using the public website</h2>
    <p>Use the site lawfully and do not disrupt availability, bypass security, distribute malicious content or misuse other people’s data. Use synthetic details in examples. Report a suspected vulnerability to <a href="mailto:hello@cameronlow.com?subject=VelocityUI%20security%20report">hello@cameronlow.com</a> with a minimal description and affected version; do not access other people’s records or perform destructive testing.</p>
    <h2>Availability and limitations</h2>
    <p>The website and examples are provided as available. Documentation can change, and an example is not a promise that an application built from it meets accessibility, security, privacy or business requirements. Test your implementation for its actual users and context. External sites and packages have separate operators and terms.</p>
    <p>Nothing here excludes rights or remedies that cannot lawfully be excluded. Ontario and applicable Canadian law govern these website terms, subject to mandatory rights that apply where you live. Contact Cameron at the address above about these terms or accessibility needs.</p>
  </PolicyDocument>
}
