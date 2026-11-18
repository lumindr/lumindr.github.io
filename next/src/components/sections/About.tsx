// GENERATED from src/components/sections/About.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';
import ScrollFade from '@/components/ScrollFade';

export default function About() {
  const { about } = site;

  return (
    <>
      <section id="about-alt" className="about">
        <div className="about-stage">
          <div className="about-content">
            <div className="about-bio-row container">
              <div className="about-bio-meta">
                <p className="body muted">About</p>
              </div>
              <div className="about-bio-col">
                <ScrollFade>
                  <div className="about-profile">
                    <h2 className="h2 balance about-headline">게임을 즐기며 실력을 키워<br /><span>프로게이머를 꿈꿉니다.</span></h2>
                    <p className="body balance">{about.description}</p>
                    <dl className="about-facts">
                      {about.facts.map((fact) => (
                        <div key={fact.label} className="about-fact">
                          <dt className="caption muted">{fact.label}</dt>
                          <dd className="body">{fact.value}</dd>
                        </div>
                      ))}
                      {site.tmi.map((item) => (
                        <div key={item.label} className="about-fact">
                          <dt className="caption muted">{item.label}</dt>
                          <dd className="body">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </ScrollFade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
