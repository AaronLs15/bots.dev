import { CSSProperties, ReactNode } from "react"

type LandingSectionProps = {
    id?: string
    eyebrow?: string
    title: string
    body: string
    children?: ReactNode
}

export default function LandingSection({
    id,
    eyebrow,
    title,
    body,
    children,
}: LandingSectionProps) {
    return (
        <section id={id} style={section}>
            <div style={content}>
                {eyebrow ? <span style={eyebrowStyle}>{eyebrow}</span> : null}
                <h2 style={titleStyle}>{title}</h2>
                <p style={bodyStyle}>{body}</p>
                {children}
            </div>
        </section>
    )
}

const section: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, 1)",
    color: "rgba(220, 244, 255, 0.88)",
    padding: "10vh 8vw",
}

const content: CSSProperties = {
    maxWidth: 720,
}

const eyebrowStyle: CSSProperties = {
    display: "inline-block",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: 12,
    color: "rgba(145, 214, 240, 0.7)",
    marginBottom: 16,
}

const titleStyle: CSSProperties = {
    fontSize: "clamp(26px, 3vw, 40px)",
    fontWeight: 600,
    margin: "0 0 16px",
}

const bodyStyle: CSSProperties = {
    margin: 0,
    fontSize: "clamp(16px, 1.4vw, 20px)",
    lineHeight: 1.6,
    color: "rgba(220, 244, 255, 0.7)",
}
