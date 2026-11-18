import { reducedMotion } from "./lib";

const elements = Array.from(document.querySelectorAll<HTMLElement>(".sw, .sf"));
if (elements.length) {
  document.documentElement.classList.add("js-reveal");

  const show = (element: HTMLElement) => element.classList.add("is-visible");
  if (reducedMotion() || !("IntersectionObserver" in window)) {
    elements.forEach(show);
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    elements.forEach((element) => observer.observe(element));
  }
}
