import { inProgress, projects, type Project, type WorkInProgress } from "@/data/content"
import { Arrow, Link, SectionLabel } from "./ui"

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "ruido") {
    return (
      <figure className="project-visual visual-ruido">
        <img
          src="images/ruido-visual/lectura-libreria.webp"
          alt="Lectura de poesía de Ruido Visual en una librería de Asunción"
          width={900}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <figcaption aria-hidden="true">
          <span className="visual-word">RUIDO</span>
          <span className="visual-word outline">VISUAL</span>
        </figcaption>
        <div className="visual-square" aria-hidden="true" />
      </figure>
    )
  }

  if (type === "system") {
    return (
      <div className="project-visual visual-system" aria-hidden="true">
        <div className="node node-a">NEGOCIO</div>
        <div className="node node-b">PROCESO</div>
        <div className="node node-c">PRODUCTO</div>
        <div className="node node-d">TECNOLOGÍA</div>
        <svg viewBox="0 0 800 520" preserveAspectRatio="none">
          <path d="M120 95C250 90 220 275 380 265S560 120 690 150" />
          <path d="M120 95C210 230 180 400 370 420S590 340 670 380" />
          <path d="M380 265C470 300 540 375 670 380" />
        </svg>
      </div>
    )
  }

  return (
    <div className="project-visual visual-deconstruction" aria-hidden="true">
      <div className="bracket left-bracket">[</div>
      <div className="decon-copy">
        <span>DE-</span>
        <span>CONS</span>
        <span>TRUC</span>
        <span>CIÓN</span>
      </div>
      <div className="bracket right-bracket">]</div>
      <div className="axis axis-x" />
      <div className="axis axis-y" />
    </div>
  )
}

function ProjectCase({ project }: { project: Project }) {
  const titleId = `p-${project.number}`
  return (
    <article className="project" aria-labelledby={titleId}>
      <div className="project-header">
        <p className="project-number">{project.number}</p>
        <p className="project-kind">{project.kind}</p>
        <p className="project-mode">{project.mode}</p>
      </div>

      <div className="project-main">
        <div className="project-copy">
          <h3 id={titleId}>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <div className="project-role">
            <span>Rol</span>
            <p>{project.role}</p>
          </div>
          {project.links && (
            <div className="project-links">
              {project.links.map((l) => (
                <Link key={l.href} href={l.href} className="button secondary">
                  {l.label} <Arrow diagonal />
                </Link>
              ))}
            </div>
          )}
        </div>
        <ProjectVisual type={project.visual} />
      </div>

      <div className="project-detail">
        <div>
          <p className="detail-label">Contexto / oportunidad</p>
          <p>{project.context}</p>
        </div>
        <div>
          <p className="detail-label">Contribuciones</p>
          <ul>
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="detail-label">Herramientas</p>
          <p>{project.tools}</p>
        </div>
        <div>
          <p className="detail-label">Resultado verificable</p>
          <p>{project.result}</p>
        </div>
        <div>
          <p className="detail-label">Aprendizaje</p>
          <p>{project.learning}</p>
        </div>
      </div>

      {project.facts && (
        <dl className="project-facts">
          {project.facts.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      )}

      {project.gallery && (
        <div className="project-gallery">
          <p className="detail-label">Archivo visual · imágenes del proyecto</p>
          <ul>
            {project.gallery.map((img) => (
              <li key={img.src} className={img.wide ? "is-wide" : undefined}>
                <figure>
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function WipCard({ item, index }: { item: WorkInProgress; index: number }) {
  return (
    <article className="wip-card" aria-labelledby={`wip-${index}`}>
      <div className="wip-media">
        {item.image ? (
          <>
            <img
              className="wip-desktop"
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              loading="lazy"
              decoding="async"
            />
            {item.mobileImage && (
              <img
                className="wip-phone"
                src={item.mobileImage.src}
                alt={item.mobileImage.alt}
                width={item.mobileImage.width}
                height={item.mobileImage.height}
                loading="lazy"
                decoding="async"
              />
            )}
          </>
        ) : (
          <div className="wip-type" aria-hidden="true">
            <span className="wip-type-label">{item.title}</span>
            <p>{item.excerpt}</p>
            <span className="wip-type-foot">Diseñado para una lectura lenta</span>
          </div>
        )}
      </div>
      <div className="wip-body">
        <div className="wip-meta">
          <p className="project-kind">{item.kind}</p>
          <p className="wip-status">
            <i aria-hidden="true" /> {item.status}
          </p>
        </div>
        <h4 id={`wip-${index}`}>{item.title}</h4>
        <p className="wip-summary">{item.summary}</p>
        <ul className="wip-list">
          {item.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="wip-tools">
          <span>Herramientas</span> {item.tools}
        </p>
        <div className="project-links">
          <Link href={item.href} className="button secondary">
            {item.hrefLabel} <Arrow diagonal />
          </Link>
          {item.repo && (
            <Link href={item.repo} className="button secondary">
              Código <Arrow diagonal />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="projects section" id="proyectos">
      <SectionLabel index="01">Proyectos seleccionados</SectionLabel>
      <div className="section-heading">
        <h2>Trabajo situado, decisiones visibles.</h2>
        <p>
          Casos que muestran cómo analizo, coordino y construyo, con alcances y responsabilidades
          expresados sin ambigüedad.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCase key={project.number} project={project} />
        ))}
      </div>

      <div className="wip" aria-labelledby="wip-title">
        <div className="wip-heading">
          <p className="detail-label">En desarrollo</p>
          <h3 id="wip-title">Sitios en construcción</h3>
          <p>
            Proyectos personales que ya están en línea y siguen creciendo. Los comparto en proceso,
            porque el proceso también es parte del trabajo.
          </p>
        </div>
        <div className="wip-grid">
          {inProgress.map((item, i) => (
            <WipCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <p className="collection-note">Colección abierta — nuevos casos se integran a este sistema.</p>
    </section>
  )
}
