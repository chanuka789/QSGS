# Website Redesign Implementation Plan

This document translates the redesign brief into an actionable plan for rebuilding the QS Global Solutions website while preserving all existing copy, SEO metadata, URLs, and headings.

## 1) Technology Stack
- **Framework**: Next.js 14 (App Router) for performant, SEO-friendly static site generation and incremental static regeneration.
- **Styling**: Tailwind CSS for rapid iteration with utility classes; custom CSS variables for theme tokens.
- **Animations**: GSAP for complex hero transitions; AOS for scroll-triggered fades/slides; prefers-reduced-motion fallbacks.
- **Forms**: Next.js API routes + Nodemailer (SMTP) for Contact/Careers submissions with server-side validation and spam throttling.
- **Images**: `next/image` with placeholders and lazy loading to protect performance.

## 2) Design System & Tokens
- **Color palette**
  - Primary: `#0C2D57` (deep navy)
  - Secondary: `#2D5BFF` (accent blue)
  - Neutrals: `#0F172A`, `#1E293B`, `#475569`, `#CBD5E1`, `#E2E8F0`, `#F8FAFC`
  - Success: `#10B981`; Warning: `#F59E0B`; Error: `#EF4444`
- **Typography**: Inter (headings), Poppins (body). Base font-size 16px; fluid scaling via `clamp()` for H1–H3.
- **Spacing scale**: 4px base (`4, 8, 12, 16, 20, 24, 32, 40, 48, 64px`).
- **Shadows/Depth**: Soft layer (`0 10px 40px rgba(12, 45, 87, 0.12)`) for cards; glassmorphism overlays with `backdrop-filter: blur(8px)` and `rgba(255,255,255,0.08)`.
- **Components**: Buttons (primary/ghost/text), cards (service, stat, testimonial), chip badges, accordion, tabs for service navigation, modal for scheduling, carousel for testimonials.

## 3) Page-by-Page Layouts
- **Global shell**: Sticky nav with brand lockup, smooth scroll, CTA "Schedule an Online Meeting" persistent on desktop and mobile. Footer with regional contacts (UAE, Kuwait, Australia, Sri Lanka) and copyright.
- **About Us**: Hero with gradient overlay + mission copy; split story section; four-category service grid; project showcase slider; global presence stats with animated counters; CTA banner.
- **Our Services**: Four service category cards with icons and hover lift; scope statement band; cross-links to detail pages; process timeline (3–5 steps) with scroll-reveal.
- **Service Detail Pages (Developers, Consultants, Contractors, Architects)**: Side nav tabs for quick jumps; accordion for detailed descriptions (ensuring existing H hierarchy preserved); feature list with icons; project-type grid; tools/software badges; dual CTAs (contact + schedule meeting).
- **Our Team**: Expertise highlight cards; geography/experience map; academic credentials list; value propositions with check icons; subtle parallax on hero.
- **Careers**: Role cards with filters; requirements/responsibilities accordions; application form (name, email, phone, role, message, CV upload); culture section with imagery.
- **Contact Us**: Region cards with phone/email; meeting scheduler form (date/time picker placeholder); embedded map placeholder; FAQ accordion.

## 4) Interaction & Motion
- **Scroll effects**: Section fade/slide using AOS; parallax hero background with GSAP; button micro-interactions (scale `1.03` and shadow intensify on hover).
- **Counters**: Animated numerical stats using `IntersectionObserver` + GSAP; respects reduced-motion by snapping to final values.
- **Carousels**: Autoplay with pause-on-hover; swipe-enabled on mobile; accessible controls and live region labels.
- **Page transitions**: Minimal crossfade between routes; maintain fast TTI by deferring heavy animations until after first paint.

## 5) Responsiveness & Layout Grid
- **Breakpoints**: `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`, `2xl 1536px`. Mobile-first stacks; convert grids to 1-col on mobile, 2-col on tablet, 3–4-col on desktop.
- **Navigation**: Desktop mega-menu links to all service detail pages; mobile drawer with sticky CTA.
- **Tables/Lists**: Use cards or accordions on small screens to preserve readability.

## 6) Accessibility & SEO Safeguards
- Preserve all existing H1/H2/H3 text, meta titles, descriptions, keywords, alt text, and URLs.
- Ensure 4.5:1 contrast; focus-visible styles; keyboard operability for nav, accordions, tabs, and carousels.
- Add `aria-live` for counters and form status; label form inputs; provide error and success states.
- Respect `prefers-reduced-motion` to disable non-essential animations.

## 7) Performance Checklist
- Enable static generation with caching headers; image lazy loading and `priority` only for above-the-fold assets.
- Tree-shake GSAP/AOS imports; code-split route groups; prefetch critical routes.
- Use CSS `aspect-ratio` for consistent media boxes; defer non-critical scripts.
- Target Lighthouse 90+ for Performance, Accessibility, Best Practices, SEO.

## 8) Content & SEO Migration
- Export current site content and metadata; lock versions in a CMS-friendly JSON/YAML file.
- Map each legacy URL to the corresponding Next.js route; enforce redirects only if necessary (goal: none).
- Validate heading hierarchy after migration; snapshot current alt text and reapply to placeholder images.

## 9) Delivery Phases
1. **Audit**: Extract content/SEO data; build site map; confirm URL parity.
2. **Design**: High-fidelity mocks for desktop/tablet/mobile; motion prototypes for hero, cards, and counters.
3. **Build**: Implement layout shells, shared components, and per-page templates; integrate forms.
4. **QA**: Accessibility testing (keyboard, screen reader smoke test), performance profiling, cross-browser checks.
5. **Launch**: Content freeze, final Lighthouse run, deploy to production, monitor analytics and error logs.

## 10) Acceptance Criteria
- All existing text/metadata/alt tags preserved verbatim; URLs unchanged.
- Responsive layouts verified at 375px, 768px, 1024px, 1440px, and 1920px.
- Animations smooth at 60fps and disabled for reduced-motion users.
- Forms validate server-side, send email notifications, and provide confirmation states.
- Lighthouse scores ≥ 90 across core categories on key templates.
