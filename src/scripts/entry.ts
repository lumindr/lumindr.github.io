/**
 * Every behaviour on the site, in one place. Each module reads the markup
 * already on the page and enhances it; a module whose markup is not on the
 * current page does nothing. The Astro build loads this file from
 * layouts/Base.astro, the Next build from src/app/Scripts.tsx.
 *
 * Modules are loaded once here; scroll smoothing is handled by native CSS.
 */
import "./fx/topbar";
import "./reveal";
import "./fx/contact";
