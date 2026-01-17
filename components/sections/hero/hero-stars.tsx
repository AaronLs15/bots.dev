import * as motion from "motion/react-client"
import { CSSProperties } from "react"

type Star = {
    id: number
    x: number
    y: number
    length: number
    thickness: number
    opacity: number
    duration: number
    delay: number
    angle: number
    blur: number
}

type HeroStarsProps = {
    maskSize?: number
}

export default function HeroStars({ maskSize = 486 }: HeroStarsProps) {
    const maskRadius = Math.round(maskSize / 2)
    const maskImage = `radial-gradient(circle ${maskRadius}px at 50% 50%, rgba(255, 255, 255, 0) 0 ${maskRadius}px, rgba(255, 255, 255, 1) ${maskRadius + 1}px)`

    return (
        <div
            style={{
                ...starField,
                WebkitMaskImage: maskImage,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage,
                maskRepeat: "no-repeat",
                maskPosition: "center",
            }}
            aria-hidden
        >
            {stars.map((star) => (
                <motion.span
                    key={star.id}
                    initial={{
                        x: `${star.x}vw`,
                        y: `${star.y}vh`,
                        opacity: 0,
                        scale: 1,
                    }}
                    animate={{
                        x: "0vw",
                        y: "0vh",
                        opacity: [0, star.opacity, 0],
                        scale: [1, 0.35],
                    }}
                    transition={{
                        duration: star.duration,
                        ease: "linear",
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                    style={{
                        ...starBase,
                        width: star.length,
                        height: star.thickness,
                        marginLeft: -star.length / 2,
                        marginTop: -star.thickness / 2,
                        rotate: star.angle,
                        filter: `blur(${star.blur}px)`,
                    }}
                />
            ))}
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const starField: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
}

const starBase: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 999,
    background:
        "linear-gradient(90deg, rgba(165, 220, 248, 0) 0%, rgba(165, 220, 248, 0.9) 50%, rgba(165, 220, 248, 0) 100%)",
    boxShadow: "0 0 12px rgba(133, 207, 236, 0.55)",
    mixBlendMode: "screen",
    transformOrigin: "center center",
}

const stars = createStars(32)

function createStars(count: number): Star[] {
    let seed = 42
    const next = () => {
        seed = (seed * 16807) % 2147483647
        return (seed - 1) / 2147483646
    }

    return Array.from({ length: count }, (_, index) => {
        const angle = next() * Math.PI * 2
        const radius = 35 + next() * 55
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return {
            id: index,
            x,
            y,
            length: 16 + next() * 34,
            thickness: 1 + next() * 1.8,
            opacity: 0.65 + next() * 0.85,
            duration: 3.8 + next() * 4.4,
            delay: next() * 4.6,
            angle: (Math.atan2(y, x) * 180) / Math.PI,
            blur: 0.2 + next() * 1.2,
        }
    })
}
