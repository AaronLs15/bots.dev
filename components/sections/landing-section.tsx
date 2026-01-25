"use client"

import { CSSProperties, ReactNode } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

type LandingContentKey = keyof typeof translations.en.landing

type LandingSectionProps = {
    id?: string
    contentKey?: LandingContentKey
    eyebrow?: string
    title?: string
    body?: string
    children?: ReactNode
}

export default function LandingSection({
    id,
    contentKey,
    eyebrow,
    title,
    body,
    children,
}: LandingSectionProps) {
    const { copy } = useLanguage()
    const sectionContent = contentKey ? copy.landing[contentKey] : undefined
    const resolvedEyebrow = eyebrow ?? sectionContent?.eyebrow
    const resolvedTitle = title ?? sectionContent?.title
    const resolvedBody = body ?? sectionContent?.body
    const sectionId = id ?? contentKey

    if (!resolvedTitle || !resolvedBody) {
        return null
    }

    return (
        <section id={sectionId} style={section}>
            <div style={content}>
                {resolvedEyebrow ? <span style={eyebrowStyle}>{resolvedEyebrow}</span> : null}
                <h2 style={titleStyle}>{resolvedTitle}</h2>
                <p style={bodyStyle}>{resolvedBody}</p>
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
