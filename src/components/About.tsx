import { about, culture, education, experience, languages } from "@/data/content"
import { SectionLabel } from "./ui"

type TimelineItem = { period: string; org: string; focus: string }

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.org}>
          <p className="timeline-period">{item.period}</p>
          <div>
            <h4>{item.org}</h4>
            <p>{item.focus}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function About() {
  return (
    <section className="profile section" id="perfil">
      <SectionLabel index="03">Sobre mí</SectionLabel>
      <div className="profile-grid">
        <div className="profile-title">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>
            {about.title} <span>{about.titleAccent}</span>
          </h2>
        </div>
        <div className="profile-copy">
          <p className="lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="profile-coordinate" aria-hidden="true">
          <span>25.2637° S</span>
          <div className="coordinate-circle">
            <i />
          </div>
          <span>57.5759° W</span>
        </div>
      </div>

      <div className="cv-grid">
        <div>
          <h3 className="cv-heading">Trayectoria profesional</h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="cv-heading">Cultura y comunidad</h3>
          <Timeline items={culture} />
          <h3 className="cv-heading cv-gap">Formación</h3>
          <ul className="edu-list">
            {education.map(([title, detail]) => (
              <li key={title}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <p className="languages">
            <span>Idiomas</span> {languages}
          </p>
        </div>
      </div>
    </section>
  )
}
