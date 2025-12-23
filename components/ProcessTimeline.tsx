import { processSteps } from '@/content/site';

export function ProcessTimeline() {
  return (
    <section className="section-shell mt-16">
      <div className="card grid gap-6 bg-white p-6 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.title} className="space-y-3" data-aos="fade-up">
            <div className="badge bg-neutral-100 text-neutral-800">Step {index + 1}</div>
            <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
            <p className="text-sm text-neutral-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
