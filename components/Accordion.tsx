'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Item {
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.title} className="card">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-neutral-900">{item.title}</span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            <div className={twMerge('px-4 pb-4 text-sm text-neutral-600', isOpen ? 'block' : 'hidden')}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
