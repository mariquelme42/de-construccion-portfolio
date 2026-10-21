import { capabilities } from "@/data/content"
import { SectionLabel } from "./ui"

export function Capabilities() {
  return (
    <section className="capabilities section" aria-labelledby="cap-title">
      <SectionLabel index="04">
        <span id="cap-title">Capacidades y herramientas</span>
      </SectionLabel>
      <div className="capabilities-list">
        {capabilities.map((cap) => (
          <article key={cap.id}>
            <p className="capability-number">{cap.id}</p>
            <h3>{cap.title}</h3>
            <p>{cap.text}</p>
            <ul className="tool-tags" aria-label={`Herramientas: ${cap.title}`}>
              {cap.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="capabilities-note">
        La formación humanística, la comunicación y la práctica cultural profundizan el análisis y la
        comprensión de cada contexto.
      </p>
    </section>
  )
}
