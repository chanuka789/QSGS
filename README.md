# QS Global Solutions Website

A modern, responsive website for Quantity Surveying Global Solutions with automatic dark/light mode support based on device theme preferences.

## Features

- **Automatic Dark/Light Mode**: Uses `prefers-color-scheme` CSS media query to automatically switch between light and dark themes based on the user's system preferences
- **Responsive Design**: Fully responsive across mobile (375px+), tablet (768px+), and desktop (1024px+) devices
- **Modern Animations**: Scroll-triggered animations, hover effects, and smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels, keyboard navigation, and focus states
- **SEO Optimized**: All meta titles, descriptions, and heading hierarchy preserved from original site

## Pages

1. **Home/Index** (`index.html`) - Main landing page with hero, services overview, and global presence
2. **About Us** (`about-us.html`) - Company information and story
3. **Our Services** (`our-services.html`) - Overview of all service categories
4. **For Property Developers** (`quantity-surveying-services-for-property-developers-clients.html`)
5. **For Consultant Firms** (`our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions.html`)
6. **For Contractors** (`our-services-for-contractors.html`)
7. **For Architects** (`quantity-surveying-remote-services-for-independant-architects.html`)
8. **Our Team** (`highly-qualified-quantity-surveyors-leading-qs-outsource-company.html`)
9. **Careers** (`careers.html`) - Job listings and application form
10. **Contact Us** (`contact-us-quantity-surveying-global-solutions.html`) - Contact form and office locations

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Flexbox, Grid, Media queries
- **JavaScript (ES6+)** - Vanilla JS for animations and interactivity
- **Google Fonts** - Poppins and Inter font families

## Design System

### Color Palette

**Light Mode:**
- Primary: `#0a5082`
- Secondary: `#ffffff`
- Accent: `#2563eb`
- Background: `#f7fafc`
- Text: `#2d3748`

**Dark Mode:**
- Background: `#0f172a`
- Card Background: `#1e293b`
- Text: `#f1f5f9`
- Accent: `#60a5fa`

### Typography

- Headings: Poppins (500-700 weight)
- Body: Inter (400-600 weight)

## Project Structure

```
QSGS/
├── css/
│   └── styles.css          # Main stylesheet with design system
├── js/
│   └── main.js             # JavaScript for animations and interactivity
├── assets/
│   ├── images/             # Image assets (placeholder)
│   └── fonts/              # Custom fonts (if needed)
├── index.html              # Home page
├── about-us.html           # About page
├── our-services.html       # Services overview
├── careers.html            # Careers page
├── contact-us-quantity-surveying-global-solutions.html
└── [service pages...]
```

## Development

To run the website locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility Features

- Skip to main content link
- Proper heading hierarchy (H1 > H2 > H3)
- ARIA labels for navigation and interactive elements
- Focus visible states
- Color contrast ratio meeting WCAG AA standards
- Reduced motion support for users who prefer it

## Performance

- Optimized CSS with custom properties
- Lazy loading for animations (Intersection Observer)
- Minimal JavaScript footprint
- No external dependencies (except Google Fonts)

## Contact Information

- **General**: info@qs-global-solutions.com
- **UAE**: +971 54 554 7086 | uae@qs-global-solutions.com
- **Kuwait**: +965 9986 9738 | kuwait@qs-global-solutions.com
- **Australia**: +61 415854225 | au@qs-global-solutions.com
- **Sri Lanka**: sl@qs-global-solutions.com

---

&copy; All Rights Reserved. Quantity Surveying Global Solutions
