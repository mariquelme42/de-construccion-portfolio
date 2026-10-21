import type { ReactNode } from "react"

type LinkProps = {
  children: ReactNode
  className?: string
  href: string
  onClick?: () => void
}

/** Enlace que abre en pestaña nueva solo cuando apunta fuera del sitio. */
export function Link({ children, className = "", href, onClick }: LinkProps) {
  const external = href.startsWith("http")
  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 20 20" fill="none">
      {diagonal ? <path d="M4 16 16 4M7 4h9v9" /> : <path d="M2 10h16M12 4l6 6-6 6" />}
    </svg>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  )
}
