import * as motion from "motion/react-client"
import { CSSProperties } from "react"

export default function HeroCircles() {
    return (
            
        <div style={orbStage} aria-hidden>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 28,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ ...orbBase, ...orbLarge }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 19,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ ...orbBase, ...orbSmall }}
            />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */



const orbStage: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
}

const orbBase: CSSProperties = {
    position: "absolute",
    borderRadius: "50%",
    background:
        "conic-gradient(from 210deg, rgba(133, 207, 236, 0) 0deg, rgba(133, 207, 236, 0.7) 70deg, rgba(133, 207, 236, 0.15) 120deg, rgba(133, 207, 236, 0.6) 200deg, rgba(133, 207, 236, 0) 320deg)",
    filter: "blur(26px)",
    opacity: 0.85,
    mixBlendMode: "screen",
    WebkitMaskImage:
        "radial-gradient(circle, transparent 48%, #000 56%, #000 72%, transparent 82%)",
    maskImage:
        "radial-gradient(circle, transparent 48%, #000 56%, #000 72%, transparent 82%)",
}

export const orbLargeSize = 486
const orbSmallSize = 380

const orbLarge: CSSProperties = {
    width: orbLargeSize,
    height: orbLargeSize,
    top: "50%",
    left: "50%",
    marginTop: -orbLargeSize / 2,
    marginLeft: -orbLargeSize / 2,
    background:
        "conic-gradient(from -40deg, rgba(133, 207, 236, 0) 0deg, rgba(133, 207, 236, 0.82) 25deg, rgba(133, 207, 236, 0.3) 70deg, rgba(133, 207, 236, 0) 100deg, rgba(133, 207, 236, 0) 180deg, rgba(133, 207, 236, 0.82) 205deg, rgba(133, 207, 236, 0.3) 250deg, rgba(133, 207, 236, 0) 280deg, rgba(133, 207, 236, 0) 360deg)",
}

const orbSmall: CSSProperties = {
    width: orbSmallSize,
    height: orbSmallSize,
    top: "50%",
    left: "50%",
    marginTop: -orbSmallSize / 2,
    marginLeft: -orbSmallSize / 2,
    opacity: 0.7,
    filter: "blur(24px)",
    background:
        "conic-gradient(from 50deg, rgba(145, 214, 240, 0) 0deg, rgba(145, 214, 240, 0.72) 25deg, rgba(145, 214, 240, 0.22) 70deg, rgba(145, 214, 240, 0) 100deg, rgba(145, 214, 240, 0) 180deg, rgba(145, 214, 240, 0.72) 205deg, rgba(145, 214, 240, 0.22) 250deg, rgba(145, 214, 240, 0) 280deg, rgba(145, 214, 240, 0) 360deg)",
}
