import { brand, contact, externalLinks } from "@/data/content"
import { Arrow, Link } from "./ui"

/** Muestra solo los canales configurados en externalLinks. */
const contactItems = [
  externalLinks.email && {
    label: "Correo",
    href: `mailto:${externalLinks.email}`,
    detail: externalLinks.email,
  },
  externalLinks.whatsapp && {
    label: "WhatsApp",
    href: `https://wa.me/${externalLinks.whatsapp}`,
    detail: `+${externalLinks.whatsapp.replace(/^(\d{3})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4")}`,
  },
  externalLinks.linkedin && {
    label: "LinkedIn",
    href: externalLinks.linkedin,
    detail: externalLinks.linkedin.split("/in/")[1] ?? "LinkedIn",
  },
  externalLinks.github && {
    label: "GitHub",
    href: externalLinks.github,
    detail: externalLinks.github.split("github.com/")[1] ?? "GitHub",
  },
].filter(Boolean) as { label: string; href: string; detail: string }[]

export function Contact() {
  return (
    <section className="contact" id="contacto">
      <p className="contact-kicker">{contact.kicker}</p>
      <h2>{contact.title}</h2>
      <div className="contact-bottom">
        <p>{contact.availability}</p>
        <div className="contact-links">
          {contactItems.map((c) => (
            <Link key={c.label} href={c.href}>
              <span className="contact-label">
                {c.label}
                <small>{c.detail}</small>
              </span>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <p>
        {brand.name} © {new Date().getFullYear()}
      </p>
      <p>
        {brand.person} · {brand.location}
      </p>
      <Link href="#inicio">Volver arriba ↑</Link>
    </footer>
  )
}
