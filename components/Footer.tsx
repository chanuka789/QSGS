import Link from 'next/link';
import { regions } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white/80 backdrop-blur">
      <div className="section-shell grid gap-10 py-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center font-semibold">QS</div>
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-neutral-600">Global Solutions</p>
              <p className="font-display text-lg font-semibold text-primary">Quantity Surveying</p>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            Precision-focused quantity surveying support for developers, consultants, contractors, and architects worldwide.
            Existing content is preserved page-by-page.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">Company</h3>
          <div className="mt-4 grid gap-2 text-sm text-neutral-700">
            <Link href="/about-us">About Us</Link>
            <Link href="/our-services">Our Services</Link>
            <Link href="/highly-qualified-quantity-surveyors-leading-qs-outsource-company">Our Team</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact-us-quantity-surveying-global-solutions">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">Service Audiences</h3>
          <div className="mt-4 grid gap-2 text-sm text-neutral-700">
            <Link href="/quantity-surveying-services-for-property-developers-clients">Property Developers</Link>
            <Link href="/our-quantity-surveying-remote-services-for-consultant-firms-qs-qlobal-solutions">Consultant Firms</Link>
            <Link href="/our-services-for-contractors">Contractors</Link>
            <Link href="/quantity-surveying-remote-services-for-independant-architects">Architects</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-neutral-900">Regional Contacts</h3>
          <div className="mt-4 grid gap-3 text-sm text-neutral-700">
            {regions.map((region) => (
              <div key={region.name} className="rounded-xl border border-neutral-200/70 p-3">
                <p className="font-semibold text-neutral-900">{region.name}</p>
                <p className="text-neutral-700">{region.phone}</p>
                <p className="text-neutral-700">{region.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200/70 bg-neutral-100 py-4 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} QS Global Solutions. All rights reserved.
      </div>
    </footer>
  );
}
