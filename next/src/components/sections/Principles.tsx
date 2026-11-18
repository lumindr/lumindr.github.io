// GENERATED from src/components/sections/Principles.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { site } from '@/lib/site';
import ScrollWords from '@/components/ScrollWords';
import Icon from '@/components/Icon';

export default function Principles() {
  return (
    <>
      <section className="games container">
        <div className="games-header">
        <ScrollWords as="h2" className="h3 balance games-heading" text="그동안 만든 작품들" />
        </div>
        <div className="games-grid">
          {site.games.map((game) => (
            <article key={game.title} className="game-card">
              <div className="game-card-media">
                <img src={game.image} alt={game.alt} loading="lazy" />
              </div>
              <div className="game-card-content">
                <div className="game-card-heading">
                  <h3>{game.title}</h3>
                </div>
                <p className="game-description">{game.description}</p>
                <div className="game-actions">
                  <a className="game-action game-action-primary" href={game.gameUrl} target="_blank" rel="noopener noreferrer">
                    <span>게임 플레이</span>
                    <Icon name="arrow-up-right" size={20} />
                  </a>
                  <a className="game-action game-action-secondary" href={game.detailsUrl} target="_blank" rel="noopener noreferrer">
                    <span>자세한 설명 보기</span>
                    <Icon name="arrow-up-right" size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
