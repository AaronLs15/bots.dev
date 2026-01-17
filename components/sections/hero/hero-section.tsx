import { CSSProperties } from "react"
import HeroBackground from "./hero-background"
import HeroTitle from "./hero-title"
import HeroNavbar from "./hero-navbar"

export default function HeroSection() {
    const titleDelay = 1.3

    return (
        <section style={heroSection}>
            <HeroBackground />
            <HeroNavbar />
            <HeroTitle delay={titleDelay} />
        </section>
    )
}

const heroSection: CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background: "rgba(0, 0, 0, 1)",
}
