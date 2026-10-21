import { useEffect, useState } from "react"
import { brand, externalLinks } from "@/data/content"
import { Arrow, Link } from "./ui"

const navItems = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#perfil", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    // Bloquea el scroll de la página mientras el menú móvil está abierto
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const headerClass = ["site-header", scrolled && "is-scrolled", menuOpen && "is-menu-open"]
    .filter(Boolean)
    .join(" ")

  return (
    <header className={headerClass}>
      <Link href="#inicio" className="brand" onClick={closeMenu}>
        {brand.name}
        <span>_</span>
      </Link>

      <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Principal" id="menu">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <div className="nav-socials">
          {externalLinks.linkedin && (
            <Link href={externalLinks.linkedin}>
              LinkedIn <Arrow diagonal />
            </Link>
          )}
          {externalLinks.github && (
            <Link href={externalLinks.github}>
              GitHub <Arrow diagonal />
            </Link>
          )}
        </div>
        <p className="nav-index">{brand.location} · PY</p>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="menu"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
