export type Region = {
  name: string;
  phone: string;
  email: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

export const regions: Region[] = [
  { name: 'UAE', phone: '+971 4 123 4567', email: 'uae@qs-global-solutions.com' },
  { name: 'Kuwait', phone: '+965 222 1234', email: 'kuwait@qs-global-solutions.com' },
  { name: 'Australia', phone: '+61 2 5550 1234', email: 'aus@qs-global-solutions.com' },
  { name: 'Sri Lanka', phone: '+94 11 234 5678', email: 'sl@qs-global-solutions.com' }
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Property Developers & Clients',
    description: 'End-to-end pre- and post-contract quantity surveying for mixed-use, residential, hospitality, retail, and infrastructure projects.',
    link: '/quantity-surveying-services-for-property-developers-clients',
    icon: 'buildings'
  },
  {
    title: 'Consultant Firms',
    description: 'Remote resourcing and overflow support that integrates seamlessly with your processes and software stack.',
    link: '/our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions',
    icon: 'handshake'
  },
  {
    title: 'Contractors',
    description: 'Cost planning, tendering, procurement, and commercial management aligned to contractor delivery needs.',
    link: '/our-services-for-contractors',
    icon: 'helmet'
  },
  {
    title: 'Architects',
    description: 'Concept-to-delivery estimating, value engineering, and design-stage cost certainty for independent architects.',
    link: '/quantity-surveying-remote-services-for-independant-architects',
    icon: 'compass'
  }
];

export const stats = [
  { label: 'Projects delivered', value: 320 },
  { label: 'Global regions supported', value: 4 },
  { label: 'Years of QS expertise', value: 18 },
  { label: 'Cost savings identified', value: 120 },
  { label: 'BIM & cost tools mastered', value: 12 }
];

export const processSteps = [
  {
    title: 'Discovery & Alignment',
    description: 'Confirm goals, stakeholders, existing documentation, and programme milestones to preserve scope and quality.'
  },
  {
    title: 'Design & Validation',
    description: 'Build responsive, accessible layouts mapped to each service audience while keeping headings and metadata intact.'
  },
  {
    title: 'Implementation',
    description: 'Develop reusable components, apply motion system, and wire forms to secure endpoints with spam protection.'
  },
  {
    title: 'QA & Launch',
    description: 'Accessibility checks, Lighthouse sweeps, and deployment with analytics/error monitoring enabled.'
  }
];

export const metaDefaults = {
  title: 'QS Global Solutions | Quantity Surveying Specialists',
  description:
    'QS Global Solutions provides quantity surveying, cost management, and remote QS resourcing for developers, consultants, contractors, and architects across the GCC, UK, and Australia.'
};

export const pageMeta = {
  '/about-us': {
    title: 'About Us | QS Global Solutions',
    description: 'Learn about our mission, origin story, and the quantity surveying expertise we deliver globally.'
  },
  '/our-services': {
    title: 'Our Services | QS Global Solutions',
    description: 'Explore tailored quantity surveying services for developers, consultants, contractors, and architects.'
  },
  '/quantity-surveying-services-for-property-developers-clients': {
    title: 'Quantity Surveying for Property Developers & Clients',
    description: 'Comprehensive QS services for mixed-use, residential, hospitality, retail, and infrastructure projects.'
  },
  '/our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions': {
    title: 'Remote Quantity Surveying for Consultant Firms',
    description: 'Scale your consultancy with experienced QS talent, familiar with your tools and workflows.'
  },
  '/our-services-for-contractors': {
    title: 'Quantity Surveying Services for Contractors',
    description: 'Pre- and post-contract support including tendering, procurement, cost control, and claims strategy.'
  },
  '/quantity-surveying-remote-services-for-independant-architects': {
    title: 'Quantity Surveying for Independent Architects',
    description: 'Design-stage cost advice, value engineering, and estimating to protect design intent and budget.'
  },
  '/highly-qualified-quantity-surveyors-leading-qs-outsource-company': {
    title: 'Our Team | QS Global Solutions',
    description: 'Meet our team of highly qualified quantity surveyors with global project experience.'
  },
  '/careers': {
    title: 'Careers | QS Global Solutions',
    description: 'Join a leading remote-first quantity surveying team delivering complex projects worldwide.'
  },
  '/contact-us-quantity-surveying-global-solutions': {
    title: 'Contact Us | QS Global Solutions',
    description: 'Schedule a meeting or reach us across UAE, Kuwait, Australia, and Sri Lanka for QS support.'
  }
} satisfies Record<string, { title: string; description: string }>;

export const tools = [
  'CostX',
  'Cubit',
  'Planswift',
  'Revit',
  'Navisworks',
  'Synchro',
  'MS Project',
  'Primavera',
  'Bluebeam'
];

export const projectTypes = ['Residential', 'Commercial', 'Hospitality', 'Industrial', 'Infrastructure', 'Mixed-Use'];
