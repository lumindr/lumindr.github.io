// GENERATED from src/components/sections/Contact.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';
import ScrollWords from '@/components/ScrollWords';

export default function Contact() {
  const { contact } = site;

  return (
    <>
      <section id="contact" className="contact container">
        <div className="contact-main">
          <div className="contact-left">
            <ScrollWords as="h2" className="h2 balance" text={contact.heading} />
          </div>
          <div className="contact-right">
            <p className="body-sb" style={{ color: 'var(--grey)' }}>{contact.label}</p>
            <p className="body balance">{contact.text}</p>
          </div>
          <div className="contact-email-card">
            <span className="contact-email-label"><span className="contact-mail-icon" aria-hidden="true">✉</span> EMAIL</span>
            <button className="contact-copy-icon" type="button" data-copy-email={site.email} aria-label="이메일 복사">
              <svg className="copy-state-icon" data-copy-icon="" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="10" y="4" width="18" height="21" rx="3" stroke="currentColor" strokeWidth="2.4"/><rect x="4" y="10" width="18" height="19" rx="3" stroke="currentColor" strokeWidth="2.4"/></svg>
              <svg className="copy-state-icon is-hidden" data-copied-icon="" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m6 16 7 7L27 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <strong className="contact-email-address">{site.email}</strong>
          </div>
        </div>
      </section>
    </>
  );
}
