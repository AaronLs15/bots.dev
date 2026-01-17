import HeroCircles, { orbLargeSize } from "./hero-circles"
import HeroStars from "./hero-stars"
import { CSSProperties } from "react"

export default function HeroBackground() {
    return (
        <div style={backgroundLayer}>
            <HeroStars maskSize={orbLargeSize} />
            <HeroCircles />
        </div>
    )
}

const backgroundLayer: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
}
