import { approach, process } from "@/data/content"
import { SectionLabel } from "./ui"

export function Approach() {
  return (
    <section className="approach section dark-section" id="enfoque">
      <SectionLabel index="02">Enfoque de trabajo</SectionLabel>
      <div className="approach-intro">
        <h2>{approach.title}</h2>
        <p>{approach.intro}</p>
      </div>
      <ol className="process-list">
        {process.map(([number, title, description], i) => (
          <li className="process-step" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="process-symbol" aria-hidden="true">
              {i === process.length - 1 ? "↺" : "→"}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
