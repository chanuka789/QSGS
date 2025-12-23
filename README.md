# QS Global Solutions

This repository contains the redesigned QS Global Solutions website implemented in Next.js 14 with Tailwind CSS, following the approved brief and plan while preserving existing content, SEO metadata, and URLs. It also retains the accompanying redesign brief and execution plan for reference.

- **Document**: [Website Redesign Project Brief](docs/website-redesign-brief.md)
- **Plan**: [Implementation Plan](docs/implementation-plan.md)
- **Scope**: Refreshes styling, interactions, and responsiveness without altering current copy, URLs, or SEO metadata.

## Getting started

```bash
npm install
npm run dev
```

Pages live under the original permalinks (e.g., `/about-us`, `/our-services`, `/quantity-surveying-services-for-property-developers-clients`). Forms post to API routes (`/api/contact`, `/api/careers`) with validation; wire SMTP credentials via environment variables before deployment.
