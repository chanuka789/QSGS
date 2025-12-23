'use client';

import { useState } from 'react';

export function ContactForm({ action }: { action: 'contact' | 'careers' }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const endpoint = action === 'contact' ? '/api/contact' : '/api/careers';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch(endpoint, { method: 'POST', body: data });
    const result = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(result.error ?? 'Something went wrong.');
      return;
    }

    setStatus('success');
    setMessage(result.message ?? 'Submitted successfully.');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm font-semibold text-neutral-800">
          Name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          />
        </label>
        <label className="text-sm font-semibold text-neutral-800">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          />
        </label>
        <label className="text-sm font-semibold text-neutral-800">
          Phone
          <input
            required
            name="phone"
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          />
        </label>
        {action === 'careers' && (
          <label className="text-sm font-semibold text-neutral-800">
            Role
            <input
              required
              name="role"
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            />
          </label>
        )}
      </div>
      <label className="text-sm font-semibold text-neutral-800">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        />
      </label>
      {action === 'careers' && (
        <label className="text-sm font-semibold text-neutral-800">
          CV / Portfolio
          <input name="cv" type="file" className="mt-1 block w-full text-sm text-neutral-700" />
        </label>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending…' : 'Submit'}
      </button>
      {message && (
        <p
          className={`text-sm ${status === 'error' ? 'text-danger' : 'text-success'}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}
