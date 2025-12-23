import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { pageMeta, regions } from '@/content/site';

export const metadata: Metadata = {
  title: pageMeta['/contact-us-quantity-surveying-global-solutions'].title,
  description: pageMeta['/contact-us-quantity-surveying-global-solutions'].description
};

export default function ContactPage() {
  return (
    <div>
      <Hero
        eyebrow="Contact"
        title="Schedule a meeting across UAE, Kuwait, Australia, or Sri Lanka"
        description="Preserve the existing contact copy, email addresses, and phone numbers. The design adds responsive cards, a scheduler placeholder, and accessible form interactions."
        ctaPrimary={{ label: 'Schedule an Online Meeting', href: '#contact-form' }}
        ctaSecondary={{ label: 'Call us', href: 'tel:+97141234567' }}
      />

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div id="contact-form" className="card p-6 space-y-4">
          <p className="badge">Meeting scheduler</p>
          <h2 className="text-xl font-semibold text-neutral-900">Share your preferred time</h2>
          <p className="text-neutral-700">Use the fields below or embed your existing scheduling widget. The heading structure mirrors the current site for SEO continuity.</p>
          <ContactForm action="contact" />
        </div>
        <div className="space-y-4">
          <div className="card p-6">
            <p className="badge">Regional contacts</p>
            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              {regions.map((region) => (
                <div key={region.name} className="rounded-xl bg-neutral-100 p-3">
                  <p className="font-semibold text-neutral-900">{region.name}</p>
                  <p>{region.phone}</p>
                  <p>{region.email}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="badge">FAQ</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Keep existing alt text for map embeds and images.</li>
              <li>• CTA button matches navigation language.</li>
              <li>• Form states announced with aria-live.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
