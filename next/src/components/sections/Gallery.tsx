// GENERATED from src/components/sections/Gallery.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';

export default function Gallery() {
  const { gallery } = site;

  return (
    <>
      <section id="work" className="gallery">
        <div className="gallery-pin">
          <div className="og-root" data-orbit="" data-images={JSON.stringify(gallery.images)}>
            <div className="og-layer" data-layer=""></div>
            <div className="og-glow" aria-hidden="true" data-glow=""></div>
          </div>
        </div>
      </section>
    </>
  );
}
