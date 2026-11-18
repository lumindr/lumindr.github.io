// GENERATED from src/components/sections/Awards.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';
import ScrollWords from '@/components/ScrollWords';

export default function Awards() {
  return (
    <>
      <section className="tmi container">
        <ScrollWords as="h2" className="h2 balance tmi-heading" text="나에 대한 TMI" />
        <div className="tmi-grid">
          {site.tmi.map((item) => (
            <article key={item.label} className="tmi-card">
              <p className="body muted">{item.label}</p>
              <h3 className="h4 balance">{item.value}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
