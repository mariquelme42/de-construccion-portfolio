import { hero } from "@/data/content"
import { Arrow, Link } from "./ui"

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-meta">
        <p>Práctica independiente</p>
        <p>Producto · Procesos · Tecnología</p>
        <p>Asunción, PY</p>
      </div>

      <div className="hero-title">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
      </div>

      <div className="hero-footer">
        <div>
          <p className="hero-intro">{hero.intro}</p>
          <ul className="hero-areas">
            {hero.areas.map(([n, label]) => (
              <li key={n}>
                <span>{n}</span> {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-actions">
          <Link className="button primary" href="#proyectos">
            Ver proyectos <Arrow />
          </Link>
          <Link className="button secondary" href="#enfoque">
            Conocer mi enfoque <Arrow />
          </Link>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span>+</span>
          <div />
        </div>
      </div>
    </section>
  )
}

export function Manifesto() {
  return (
    <section className="manifesto" aria-label="Manifiesto">
      <p className="manifesto-index">D/C — 001</p>
      <p className="manifesto-copy">
        Deconstruyo para <em>comprender.</em>
        <br />
        Reinterpreto para <em>construir.</em>
      </p>
      <p className="manifesto-aside">
        Exploro la intersección entre producto, tecnología, sistemas y cultura.
      </p>
    </section>
  )
}
