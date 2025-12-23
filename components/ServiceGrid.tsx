import Link from 'next/link';
import { serviceCategories } from '@/content/site';

export function ServiceGrid() {
  return (
    <section className="section-shell mt-12 space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="badge bg-white text-neutral-700">Four tailored service streams</p>
          <h2 className="text-2xl font-semibold text-neutral-900">Built for your delivery model</h2>
        </div>
        <Link href="/our-services" className="button-ghost">
          View all services
        </Link>
      </div>
      <div className="grid-auto-fit">
        {serviceCategories.map((service) => (
          <Link
            key={service.title}
            href={service.link}
            className="card group relative overflow-hidden p-6"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative space-y-3">
              <span className="badge">{service.icon}</span>
              <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
              <p className="text-sm text-neutral-600">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                Read more <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
