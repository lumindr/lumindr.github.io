// Mobile menu behaviour shared by the Astro and Next builds.
const header = document.querySelector<HTMLElement>("[data-topbar]")!;
const btn = header.querySelector<HTMLButtonElement>("[data-menu-btn]")!;
const nav = header.querySelector<HTMLElement>("[data-mobile-nav]")!;
const iconOpen = header.querySelector<HTMLElement>("[data-icon-open]")!;
const iconClose = header.querySelector<HTMLElement>("[data-icon-close]")!;
const phone = window.matchMedia("(max-width: 809px)");
let open = false;

const setOpen = (o: boolean) => {
  open = o;
  nav.classList.toggle("is-open", o);
  nav.setAttribute("aria-hidden", String(!o));
  nav.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", o ? "0" : "-1"));
  btn.setAttribute("aria-expanded", String(o));
  btn.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  iconOpen.style.opacity = o ? "0" : "1";
  iconClose.style.opacity = o ? "1" : "0";
};
btn.addEventListener("click", () => setOpen(!open));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
phone.addEventListener("change", () => {
  if (!phone.matches && open) setOpen(false);
});

