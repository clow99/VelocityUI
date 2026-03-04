# Security Policy

## Supported Versions

| Version | Supported          |
|---------|-------------------|
| 0.1.x   | Yes               |
| < 0.1   | No                |

## Reporting a Vulnerability

**Do not report security issues through public GitHub Issues.**

To report a vulnerability, email the maintainers directly via the contact listed in the GitHub repository. Please include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce the issue.
- Any relevant versions affected.
- Optional: a suggested fix or patch.

You should receive an acknowledgement within 72 hours. We will coordinate a fix and disclose the issue publicly once a patched release is available.

## Scope

This package is a client-side React component library. It processes no secrets, makes no server-side network calls, and stores no user data. Potential areas of concern include:

- DOM-based XSS through user-supplied `children` or `label` props (callers are responsible for sanitising untrusted user content before passing it to components).
- Prototype pollution via malicious prop values.

## Out of Scope

- Vulnerabilities in the documentation site that are purely cosmetic or require physical access.
- Vulnerabilities in third-party dependencies that have already been publicly disclosed and have an available update.
