import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@fontsource/syne/latin-500.css"
import "@fontsource/syne/latin-600.css"
import "@fontsource/manrope/latin-400.css"
import "@fontsource/manrope/latin-500.css"
import "@fontsource/manrope/latin-600.css"
import "@fontsource/dm-mono/latin-400.css"
import "@fontsource/dm-mono/latin-500.css"
import "./index.css"

import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
