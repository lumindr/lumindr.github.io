// GENERATED from src/components/sections/Footer.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top container">
          <nav className="footer-col footer-nav" aria-label="Footer">
            {site.footerNav.map((l) => <a className="body" href={l.href}>{l.label}</a>)}
          </nav>
        </div>
        <div className="footer-bottom container">
          <p className="caption"><span className="muted">© {site.year} lumindr. All rights reserved.</span></p>
        </div>
      </footer>
    </>
  );
}
