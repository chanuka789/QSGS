'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceCategories } from '@/content/site';

export function ServiceTabs() {
  const pathname = usePathname();
  return (
    <div className="section-shell mt-8 overflow-auto">
      <div className="flex min-w-max gap-2 rounded-full bg-white p-2 shadow-card">
        {serviceCategories.map((service) => {
          const active = pathname === service.link;
          return (
            <Link
              key={service.link}
              href={service.link}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active ? 'bg-secondary text-white shadow-card' : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {service.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
