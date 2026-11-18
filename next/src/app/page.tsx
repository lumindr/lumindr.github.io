// GENERATED from src/pages/index.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import Base from '@/layouts/Base';
import Topbar from '@/components/Topbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Principles from '@/components/sections/Principles';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <>
      <Base route="/">
        <Topbar path="/" />
        <main>
          <Hero />
          <About />
          <Principles />
          <Contact />
        </main>
        <Footer />
      </Base>
    </>
  );
}
