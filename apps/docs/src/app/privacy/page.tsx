import { PolicyDocument } from '@/components/PolicyDocument'

export const metadata = { title: 'Privacy — VelocityUI', alternates: { canonical: 'https://velocityui.com/privacy' } }

export default function PrivacyPage() {
  return <PolicyDocument title="Privacy notice">
    <h2>Operator and scope</h2>
    <p>Cameron Low, an individual in Ontario, Canada, operates velocityui.com under the VelocityUI product name. This notice covers the documentation and interactive examples. Applications built independently with the open-source library have their own operators and privacy practices.</p>
    <h2>Documentation and examples</h2>
    <p>This website has no user accounts, paid checkout, newsletter subscription or third-party analytics integration. Example messages, profiles, purchases and statistics are fictional. Demo form entries and selected files are handled in the current browser interface, without being submitted to a VelocityUI account or payment service. Use made-up information; never enter a real password, payment card or sensitive file into an example. Reloading a page normally resets its demo state.</p>
    <h2>Browser preferences</h2>
    <p>The site stores your theme and density choices in local storage, under vui-docs-theme and vui-docs-density. These preferences are used to display the site and remain until you change them or clear this site’s browser data. They are not an advertising profile. Fonts and example images are served with the site.</p>
    <h2>Hosting and logs</h2>
    <p>The site runs on Cameron-managed Hostinger infrastructure in the United States. Delivery and security logs can include IP address, request path, timestamp, response status and browser information. Normal web-server logs rotate daily with 14 rotations retained; records needed for an incident or legal obligation may be kept longer. Information processed outside Canada can be subject to local laws. There is no verified instant-erasure promise for infrastructure backups.</p>
    <h2>Contact and external services</h2>
    <p>Email to <a href="mailto:hello@cameronlow.com">hello@cameronlow.com</a> is forwarded by Cloudflare to Google’s email service. Cameron uses your address, message and attachments to answer the inquiry and retain necessary follow-up or legal records, with periodic deletion review. An inquiry does not subscribe you to marketing.</p>
    <p>GitHub and npm are external destinations for source code, issues and packages. Following those links or installing a package engages those services under their own policies. Their account data is not collected by this documentation site.</p>
    <h2>Your choices and requests</h2>
    <p>You can clear browser preferences without contacting Cameron. Email for questions or requests concerning access, correction, deletion or applicable consent withdrawal. Include the relevant page and approximate date, without sending passwords. Ownership may need to be verified, and legal or security retention limits will be explained. You may also contact the <a href="https://www.priv.gc.ca/en/">Office of the Privacy Commissioner of Canada</a>.</p>
    <p>Material changes will receive an updated effective date and additional notice or consent where required.</p>
  </PolicyDocument>
}
