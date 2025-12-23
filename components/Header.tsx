'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { serviceCategories } from '@/content/site';

const navLinks = [
  { href: '/about-us', label: 'About' },
  { href: '/our-services', label: 'Services' },
  { href: '/highly-qualified-quantity-surveyors-leading-qs-outsource-company', label: 'Our Team' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact-us-quantity-surveying-global-solutions', label: 'Contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/70'
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center font-semibold">QS</div>
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-neutral-600">Global Solutions</p>
            <p className="font-display text-lg font-semibold">Quantity Surveying</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-primary">
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-sm font-medium text-neutral-700 hover:text-primary">Solutions</button>
            <div className="invisible absolute right-0 mt-2 grid min-w-[320px] gap-2 rounded-2xl bg-white p-4 shadow-card opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {serviceCategories.map((service) => (
                <Link
                  key={service.link}
                  href={service.link}
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-neutral-100"
                >
                  <span className="mt-1 text-secondary">★</span>
                  <div>
                    <p className="font-semibold text-neutral-900">{service.title}</p>
                    <p className="text-sm text-neutral-600">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact-us-quantity-surveying-global-solutions" className="button-primary text-sm">
            Schedule an Online Meeting
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden rounded-full border border-neutral-200 p-2 shadow-card"
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-neutral-900" />
          <span className="mt-1 block h-0.5 w-6 bg-neutral-900" />
          <span className="mt-1 block h-0.5 w-6 bg-neutral-900" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-card">
          <div className="section-shell space-y-3 pb-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-neutral-800 hover:bg-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-2 rounded-lg bg-neutral-50 p-3">
              {serviceCategories.map((service) => (
                <Link
                  key={service.link}
                  href={service.link}
                  className="rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link
              href="/contact-us-quantity-surveying-global-solutions"
              className="button-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Schedule an Online Meeting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
